// pages/api/general.js
import http from 'http'
import https from 'https'
import { getCookie } from 'cookies-next'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Security: Allowed target prefixes for API endpoints
const ALLOWED_TARGET_PREFIXES = [
   '/api/live/',
   '/api/post/',
   '/api/ppl/',
   '/api/dynamic-data/',
   '/api/section',
   '/api/live-image',
   '/api/live-polls',
   '/dashboard-setting/',
   '/api/user',
   '/api/category',
   '/api/tag',
   '/api/status',
   '/api/e-news-paper',
   '/api/video',
   '/api/image',
   '/api/gallery',
   '/api/upload',
   '/api/auth/login',
   '/api/auth/register',
   '/api/auth/forgot-password',
   '/api/auth/reset-password',
   '/api/survey',
   '/api/dashboard-setting',
]

// Endpoints that don't require authentication
const PUBLIC_ENDPOINTS = [
   '/api/auth/login',
   '/api/auth/register',
   '/api/auth/forgot-password',
   '/api/auth/reset-password',
   '/dashboard-setting/',
]

const BACKEND_TIMEOUT = 15000 // 15 seconds

// Helper function to read raw body from request stream
function getRawBody(req) {
   return new Promise((resolve, reject) => {
      const chunks = []
      req.on('data', (chunk) => chunks.push(chunk))
      req.on('end', () => resolve(Buffer.concat(chunks)))
      req.on('error', reject)
      req.on('aborted', () => reject(new Error('Request aborted')))
   })
}

// Helper function to normalize headers to lowercase
function normalizeHeaders(headers) {
   const normalized = {}
   for (const [key, value] of Object.entries(headers)) {
      normalized[key.toLowerCase()] = value
   }
   return normalized
}

export default async function handler(req, res) {
   const { query, method } = req
   const target = query.target

   console.log('🚀 [Proxy] === REQUEST STARTED ===')
   console.log('📝 [Proxy] Method:', method)
   console.log('🎯 [Proxy] Target (raw):', target)

   // Validate target parameter
   if (!target) {
      console.error('❌ [Proxy] ERROR: Missing target parameter')
      return res.status(400).json({
         error: 'Missing target parameter',
         message: 'Please provide target parameter in query string',
      })
   }

   const decodedTarget = decodeURIComponent(target)
   const isPublicEndpoint = PUBLIC_ENDPOINTS.some((endpoint) =>
      decodedTarget.startsWith(endpoint)
   )
   const isLoginEndpoint = decodedTarget.includes('/auth/login')

   console.log('🔓 [Proxy] Target (decoded):', decodedTarget)
   console.log(
      '🔒 [Proxy] Is public endpoint:',
      isPublicEndpoint ? '✅ YES' : '❌ NO'
   )
   console.log(
      '🔐 [Proxy] Is login endpoint:',
      isLoginEndpoint ? '✅ YES' : '❌ NO'
   )

   // Security: Validate target against allowed prefixes
   const isAllowed = ALLOWED_TARGET_PREFIXES.some((prefix) =>
      decodedTarget.startsWith(prefix)
   )

   if (!isAllowed) {
      console.error(
         `❌ [Proxy] SECURITY: Unauthorized target: ${decodedTarget}`
      )
      return res.status(403).json({
         error: 'Unauthorized target API path',
         message: 'The requested API endpoint is not in the allowed list',
      })
   }

   // Construct backend API URL
   const backendApiUrl = new URL(decodedTarget, API_URL)
   console.log('🌐 [Proxy] Backend URL:', backendApiUrl.toString())

   const backendProtocol = backendApiUrl.protocol === 'https:' ? https : http

   try {
      // Handle request body parsing
      let parsedBody = null
      let rawBody = null
      const normalizedHeaders = normalizeHeaders(req.headers)
      const contentType = normalizedHeaders['content-type'] || ''

      // Read raw body for non-GET/HEAD requests
      if (method !== 'GET' && method !== 'HEAD') {
         try {
            rawBody = await getRawBody(req)
            console.log('📦 [Proxy] Raw body size:', rawBody.length, 'bytes')

            // Parse body based on content type
            if (contentType.includes('application/json')) {
               if (rawBody.length > 0) {
                  parsedBody = JSON.parse(rawBody.toString('utf8'))
                  console.log(
                     '📦 [Proxy] Parsed JSON body:',
                     JSON.stringify(parsedBody, null, 2)
                  )
               }
            } else if (
               contentType.includes('application/x-www-form-urlencoded')
            ) {
               parsedBody = rawBody.toString('utf8')
               console.log('📦 [Proxy] URL encoded body:', parsedBody)
            } else {
               parsedBody = rawBody
               console.log('📦 [Proxy] Raw binary body preserved')
            }
         } catch (bodyError) {
            console.error(
               '❌ [Proxy] Error parsing request body:',
               bodyError.message
            )
            return res.status(400).json({
               error: 'Invalid request body',
               message: bodyError.message,
            })
         }
      }

      // Handle authentication
      let authToken = null
      if (!isPublicEndpoint) {
         authToken = getCookie('tokenId', { req, res })
         console.log(
            '🔑 [Proxy] Token for private endpoint:',
            authToken ? '✅ Found' : '❌ Missing'
         )
      }

      // Prepare headers for backend request
      const forwardHeaders = {
         'user-agent': normalizedHeaders['user-agent'] || 'NextJS-Proxy/1.0',
         accept: normalizedHeaders['accept'] || 'application/json',
         host: backendApiUrl.hostname,
      }

      // Special handling for login endpoint - use exact browser headers
      if (isLoginEndpoint) {
         console.log('🔐 [Proxy] === LOGIN ENDPOINT DETECTED ===')
         console.log('🔐 [Proxy] Applying optimized headers for login request')

         // Use exact headers that work with the backend
         Object.assign(forwardHeaders, {
            accept: 'application/json, text/plain, */*',
            'accept-language':
               normalizedHeaders['accept-language'] || 'en-US,en;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            origin: normalizedHeaders['origin'] || 'http://localhost:3000',
            pragma: 'no-cache',
            referer:
               normalizedHeaders['referer'] ||
               'http://localhost:3000/admin/login',
            'sec-ch-ua':
               normalizedHeaders['sec-ch-ua'] ||
               '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': normalizedHeaders['sec-ch-ua-mobile'] || '?0',
            'sec-ch-ua-platform':
               normalizedHeaders['sec-ch-ua-platform'] || '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent':
               normalizedHeaders['user-agent'] ||
               'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
         })

         console.log(
            '🔐 [Proxy] Login request body:',
            JSON.stringify(parsedBody, null, 2)
         )
      } else {
         // Standard headers for other endpoints
         if (contentType) {
            forwardHeaders['content-type'] = contentType
         }
         if (normalizedHeaders['accept-language']) {
            forwardHeaders['accept-language'] =
               normalizedHeaders['accept-language']
         }
         if (normalizedHeaders['origin']) {
            forwardHeaders['origin'] = normalizedHeaders['origin']
         }
         if (normalizedHeaders['referer']) {
            forwardHeaders['referer'] = normalizedHeaders['referer']
         }
      }

      // Add authentication for private endpoints
      if (!isPublicEndpoint && authToken) {
         forwardHeaders['authorization'] = authToken
         console.log('✅ [Proxy] Authorization header added')
      }

      // Prepare request body
      let requestBody = null
      if (parsedBody !== null) {
         if (contentType.includes('application/json') || isLoginEndpoint) {
            requestBody = Buffer.from(JSON.stringify(parsedBody), 'utf8')
            forwardHeaders['content-type'] = 'application/json'
         } else if (typeof parsedBody === 'string') {
            requestBody = Buffer.from(parsedBody, 'utf8')
         } else if (Buffer.isBuffer(parsedBody)) {
            requestBody = parsedBody
         }

         if (requestBody) {
            forwardHeaders['content-length'] = requestBody.length.toString()
            console.log(
               '📦 [Proxy] Request body size:',
               requestBody.length,
               'bytes'
            )
         }
      }

      console.log('📤 [Proxy] Final headers to backend:')
      Object.entries(forwardHeaders).forEach(([key, value]) => {
         const displayValue =
            key === 'authorization' ? `${value?.substring(0, 20)}...` : value
         console.log(`📤 [Proxy] - ${key}: ${displayValue}`)
      })

      // Create backend request
      const backendRequestOptions = {
         hostname: backendApiUrl.hostname,
         port:
            backendApiUrl.port ||
            (backendApiUrl.protocol === 'https:' ? 443 : 80),
         path: backendApiUrl.pathname + backendApiUrl.search,
         method: method,
         headers: forwardHeaders,
         timeout: BACKEND_TIMEOUT,
         rejectUnauthorized: true,
      }

      console.log('🕐 [Proxy] Sending request to backend...')

      const backendReq = backendProtocol.request(
         backendRequestOptions,
         (backendRes) => {
            console.log('📥 [Proxy] === BACKEND RESPONSE RECEIVED ===')
            console.log(
               '📊 [Proxy] Status:',
               backendRes.statusCode,
               backendRes.statusMessage
            )

            if (isLoginEndpoint) {
               console.log('🔐 [Proxy] === LOGIN RESPONSE ===')
               console.log('🔐 [Proxy] Login status:', backendRes.statusCode)
               if (backendRes.statusCode === 200) {
                  console.log('✅ [Proxy] Login appears successful!')
               } else {
                  console.log(
                     '❌ [Proxy] Login failed with status:',
                     backendRes.statusCode
                  )
               }
            }

            // Set response status and headers
            res.status(backendRes.statusCode || 500)

            // Forward response headers (excluding problematic ones)
            Object.entries(backendRes.headers).forEach(([key, value]) => {
               const lowerKey = key.toLowerCase()
               if (
                  !['transfer-encoding', 'connection', 'keep-alive'].includes(
                     lowerKey
                  )
               ) {
                  res.setHeader(key, value)
               }
            })

            // Collect response data
            const chunks = []

            backendRes.on('data', (chunk) => {
               chunks.push(chunk)
            })

            backendRes.on('end', () => {
               const responseData = Buffer.concat(chunks)
               console.log(
                  '📊 [Proxy] Response size:',
                  responseData.length,
                  'bytes'
               )

               try {
                  const responseString = responseData.toString('utf8')

                  // Log response preview
                  if (isLoginEndpoint) {
                     console.log(
                        '🔐 [Proxy] Login response preview:',
                        responseString.substring(0, 200)
                     )

                     // Try to parse login response
                     try {
                        const loginResponse = JSON.parse(responseString)
                        if (loginResponse.token || loginResponse.access_token) {
                           console.log(
                              '✅ [Proxy] Login token detected in response'
                           )
                        }
                        if (loginResponse.error) {
                           console.log(
                              '❌ [Proxy] Login error:',
                              loginResponse.error
                           )
                        }
                     } catch (e) {
                        console.log('⚠️ [Proxy] Login response is not JSON')
                     }
                  } else {
                     console.log(
                        '📄 [Proxy] Response preview:',
                        responseString.substring(0, 200)
                     )
                  }

                  // Check for server errors
                  if (
                     responseString.includes('iisnode encountered an error') ||
                     responseString.includes('HTTP Error') ||
                     (backendRes.statusCode >= 400 &&
                        backendRes.headers['content-type']?.includes(
                           'text/html'
                        ))
                  ) {
                     console.error(
                        '❌ [Proxy] Server error detected in response'
                     )
                  }

                  res.write(responseData)
                  res.end()

                  if (isLoginEndpoint) {
                     console.log('✅ [Proxy] === LOGIN REQUEST COMPLETED ===')
                  } else {
                     console.log('✅ [Proxy] === REQUEST COMPLETED ===')
                  }
               } catch (error) {
                  console.error(
                     '❌ [Proxy] Error processing response:',
                     error.message
                  )
                  if (!res.headersSent) {
                     res.status(500).json({
                        error: 'Error processing response',
                     })
                  }
                  res.end()
               }
            })

            backendRes.on('error', (error) => {
               console.error('❌ [Proxy] Backend response error:', error)
               if (!res.headersSent) {
                  res.status(500).json({ error: 'Backend response error' })
               }
               res.end()
            })
         }
      )

      // Handle request errors
      backendReq.on('error', (error) => {
         console.error('❌ [Proxy] === REQUEST ERROR ===')
         console.error('❌ [Proxy] Error:', error.code, error.message)

         if (isLoginEndpoint) {
            console.error('❌ [Proxy] === LOGIN REQUEST FAILED ===')
         }

         if (!res.headersSent) {
            if (error.code === 'ENOTFOUND') {
               return res.status(503).json({
                  error: 'Backend service unavailable',
                  message: 'Please try again later',
               })
            }
            return res.status(500).json({
               error: 'Failed to connect to backend',
               message: error.message,
            })
         }
      })

      backendReq.on('timeout', () => {
         console.error('⏰ [Proxy] Request timeout')
         backendReq.destroy()
         if (!res.headersSent) {
            return res.status(504).json({
               error: 'Backend request timed out',
               timeout: `${BACKEND_TIMEOUT}ms`,
            })
         }
      })

      // Send request body if present
      if (requestBody) {
         console.log('📤 [Proxy] Writing request body to backend')
         backendReq.write(requestBody)
      }

      backendReq.end()
   } catch (error) {
      console.error('💥 [Proxy] === UNEXPECTED ERROR ===')
      console.error('💥 [Proxy] Error:', error.message)
      console.error('💥 [Proxy] Stack:', error.stack)

      if (!res.headersSent) {
         return res.status(500).json({
            error: 'Internal proxy error',
            message: error.message,
         })
      }
   }
}

// Disable Next.js body parser to handle raw request streams
export const config = {
   api: {
      bodyParser: false,
   },
}
