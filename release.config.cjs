const MODULE_NAME = process.env.MODULE_NAME;

module.exports = {
    "branches": "master",
    "tagFormat": MODULE_NAME + "-${version}",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "semantic-release-replace-plugin",
            {
                "replacements": [
                    {
                        "files": ["gradle.properties"],
                        "from": "version=.*",
                        "to": "version=${nextRelease.version}",
                        // "results": [
                        //     {
                        //         "file": "gradle.properties",
                        //         "hasChanged": true,
                        //         "numMatches": 1,
                        //         "numReplacements": 1
                        //     }
                        // ],
                        "countMatches": true
                    }
                ]
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": ["package.json", "CHANGELOG.md", "gradle.properties"],
                "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
            }
        ]
    ]
}