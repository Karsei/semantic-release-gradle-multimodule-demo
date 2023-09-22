const MODULE_NAME = process.env.MODULE_NAME;

module.exports = {
    "branches": "master",
    "tagFormat": MODULE_NAME + "-${version}",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/git",
            {
                "assets": ["package.json", "CHANGELOG.md"],
                "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
            }
        ]
    ]
}