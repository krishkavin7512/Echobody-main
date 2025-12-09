$outputFile = "FULL_PROJECT_CONTEXT_UPDATED.md"
$rootPath = Get-Location
$excludes = @(
    ".git",
    ".idea",
    ".vscode",
    "node_modules",
    "target",
    "dist",
    "build",
    ".mvn",
    "coverage",
    ".vite"
)
$excludeFiles = @(
    "package-lock.json",
    "bun.lockb",
    "yarn.lock",
    "FULL_PROJECT_CONTEXT.md",
    "FULL_PROJECT_CONTEXT_UPDATED.md",
    "project_overview.md",
    "mvnw",
    "mvnw.cmd"
)
$includeExtensions = @(
    ".java",
    ".xml",
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".css",
    ".scss",
    ".html",
    ".json",
    ".properties",
    ".yaml",
    ".yml",
    ".md",
    ".txt"
)

# Header
Set-Content -Path $outputFile -Value "# Full Project Context`nGenerated on $(Get-Date)`n"

# Function to process files
function Process-Directory($dir) {
    $files = Get-ChildItem -Path $dir -Force | Sort-Object Name

    foreach ($item in $files) {
        $relPath = $item.FullName.Substring($rootPath.Path.Length + 1)
        
        # Check Excludes
        $skip = $false
        foreach ($ex in $excludes) {
            if ($relPath.StartsWith($ex) -or $relPath.Contains("\$ex\")) {
                $skip = $true
                break
            }
        }
        if ($skip) { continue }
        
        if ($item.PSIsContainer) {
            Process-Directory $item.FullName
        } else {
            # Check File Excludes and Extensions
            if ($excludeFiles -contains $item.Name) { continue }
            if ($includeExtensions -contains $item.Extension) {
                
                Write-Host "Processing: $relPath"
                
                Add-Content -Path $outputFile -Value "`n================================================================================"
                Add-Content -Path $outputFile -Value "FILE PATH: $relPath"
                Add-Content -Path $outputFile -Value "================================================================================`n"
                
                try {
                    $content = Get-Content -Path $item.FullName -Raw
                    # Handle markdown code blocks in the content by escaping or just dumping raw
                    # Simple dump is usually fine for AI context
                    Add-Content -Path $outputFile -Value $content
                } catch {
                    Add-Content -Path $outputFile -Value "[Error reading file]"
                }
            }
        }
    }
}

Process-Directory $rootPath
Write-Host "Context generation complete: $outputFile"
