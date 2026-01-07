#!/usr/bin/env pwsh
# Quick deployment script for Edge Function using npx

Write-Host "🚀 Deploying Edge Function with Gmail SMTP..." -ForegroundColor Cyan
Write-Host ""

Write-Host "✅ Using npx supabase" -ForegroundColor Green

# Deploy the function
Write-Host ""
Write-Host "📦 Deploying send-contact-email function..." -ForegroundColor Cyan
npx supabase functions deploy send-contact-email

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Function deployed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Yellow
    Write-Host "1. Set your Gmail App Password:" -ForegroundColor White
    Write-Host "   npx supabase secrets set GMAIL_APP_PASSWORD=your_16_char_password" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Set Gmail user (optional, defaults to madhankumar070406@gmail.com):" -ForegroundColor White
    Write-Host "   npx supabase secrets set GMAIL_USER=madhankumar070406@gmail.com" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Verify secrets:" -ForegroundColor White
    Write-Host "   npx supabase secrets list" -ForegroundColor Gray
    Write-Host ""
    Write-Host "4. View logs:" -ForegroundColor White
    Write-Host "   npx supabase functions logs send-contact-email --follow" -ForegroundColor Gray
    Write-Host ""
    Write-Host "5. IMPORTANT: Frontend Configuration" -ForegroundColor Magenta
    Write-Host "   Ensure your Production Environment (Vercel/Netlify) has these variables:" -ForegroundColor White
    Write-Host "   - VITE_SUPABASE_URL: (Your Supabase Project URL)" -ForegroundColor Gray
    Write-Host "   - VITE_SUPABASE_ANON_KEY: (Your Supabase Anon Key)" -ForegroundColor Gray
    Write-Host "   Without these, the deployed website cannot contact the Edge Function." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📧 Email Configuration:" -ForegroundColor Cyan
    Write-Host "   - Using Gmail SMTP (native Deno implementation)" -ForegroundColor White
    Write-Host "   - Emails will be sent to: madhankumar070406@gmail.com" -ForegroundColor White
    Write-Host "   - Data will be stored in Supabase database" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    Write-Host "Check the error messages above for details." -ForegroundColor Yellow
    exit 1
}
