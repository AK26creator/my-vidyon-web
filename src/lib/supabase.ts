// src/lib/supabase.ts
// Supabase client configuration

import { createClient } from '@supabase/supabase-js'

// These values are SAFE to expose in frontend code
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Create Supabase client with anon key (public, safe to use in frontend)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form submission function
export async function submitContactForm(data: {
    name: string
    email: string
    phone?: string
    institution?: string
    message: string
}) {
    // Check configuration before making request
    if (supabaseUrl === 'https://your-project.supabase.co' || supabaseUrl.includes('your-project')) {
        console.error('Supabase URL is not configured correctly:', supabaseUrl)
        return {
            success: false,
            error: 'Configuration Error: VITE_SUPABASE_URL is not set in your deployment environment variables.'
        }
    }

    try {
        // Call the Edge Function
        const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
            body: data
        })

        if (error) {
            console.error('Supabase Function Error:', error)
            throw error
        }

        return {
            success: true,
            message: responseData?.message || 'Message sent successfully!'
        }
    } catch (error: any) {
        console.error('Contact form invocation error:', error)

        // Improve error message for common issues
        let errorMessage = error.message || 'Failed to send message.'

        if (errorMessage.includes('Failed to send a request to the Edge Function')) {
            errorMessage = 'Connection failed. Please check your network or try again later. (Error: Function Unreachable)'
        }

        return {
            success: false,
            error: errorMessage
        }
    }
}
