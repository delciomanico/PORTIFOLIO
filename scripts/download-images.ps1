# Download images used in homeSlides to public/images

$baseDir = Join-Path -Path $PSScriptRoot -ChildPath "..\public\images"
if (-not (Test-Path $baseDir)) { New-Item -ItemType Directory -Path $baseDir -Force | Out-Null }

# Direct image URLs to download
$images = @(
    @{ url = 'https://media.licdn.com/dms/image/v2/D4D22AQE3LMOdorNvVg/feedshare-shrink_480/B4DZ.VwXj7JQAg-/0/1784923912992?e=1788393600&v=beta&t=wcZu5sEh2mwxbvOuRgzt3USdcSf9PsZ88dz_S-LswaM'; filename = 'linkedin-1.jpg' },
    @{ url = 'https://media.licdn.com/dms/image/v2/D4D22AQFFYrz5ucxRqw/feedshare-shrink_480/B4DZ634paBJAAg-/0/1781201543524?e=1788393600&v=beta&t=Fm-bUabMMoevRp7c2fVPDRD08VpRC5E4Rv7rCaLm7og'; filename = 'linkedin-2.jpg' }
)

foreach ($img in $images) {
    $out = Join-Path $baseDir $img.filename
    Write-Host "Downloading $($img.url) -> $out"
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $out -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Warning "Failed to download $($img.url): $_"
    }
}

# Instagram post: fetch page, extract og:image and download as instagram-first.webp
$instaPost = 'https://www.instagram.com/delciomonarca/p/DRsUSEYDnes/?img_index=1'
Write-Host "Fetching Instagram post to extract image URL: $instaPost"
try {
    $resp = Invoke-WebRequest -Uri $instaPost -UseBasicParsing -ErrorAction Stop
    $m = [regex]::Match($resp.Content, 'property="og:image"\s+content="([^"]+)"')
    if ($m.Success) {
        $imgUrl = $m.Groups[1].Value -replace '&amp;','&'
        $outInsta = Join-Path $baseDir 'instagram-first.webp'
        Write-Host "Downloading Instagram image -> $outInsta"
        Invoke-WebRequest -Uri $imgUrl -OutFile $outInsta -UseBasicParsing -ErrorAction Stop
    } else {
        Write-Warning "Could not find og:image in Instagram post HTML."
    }
} catch {
    Write-Warning "Failed to fetch Instagram post or download image: $_"
}

Write-Host "Done. Check public/images for downloaded files."