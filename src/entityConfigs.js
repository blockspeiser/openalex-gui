
// color ideas!
// https://www.heavy.ai/blog/12-color-palettes-for-telling-better-stories-with-your-data
// https://carbondesignsystem.com/data-visualization/color-palettes/

const entityConfigs = {
    works: {
        emoji: "📄",
        icon: "mdi-file-document-outline",
        name: "works",
        displayName: "works",
        displayNameSingular: "work",
        descr: "Scholarly papers, books, datasets, etc.",
        eg: "On the Electrodynamics of Moving Bodies",
        placeholder: "Search scholarly papers, books, and more",
        filterName: "work",
    },
    authors: {
        emoji: "🧑",
        // icon: "mdi-account-school-outline",
        icon: "mdi-account-outline",
        name: "authors",
        displayName: "authors",
        displayNameSingular: "person",
        descr: "Creators of scholarly works",
        eg: "Albert Einstein",
        placeholder: "Search scholarly authors",
        filterName: "author",
        filterKey: "authorships.author.id",
    },
    sources: {
        emoji: "📚",
        // icon: "mdi-book-outline",
        icon: "mdi-book-open-outline",
        name: "sources",
        displayName: "sources",
        displayNameSingular: "source",
        descr: "Journals, conferences, and repositories",
        eg: "The New England Journal of Medicine",
        placeholder: "Search academic journals & repositories",
        filterName: "primary_location.source",
        filterKey: "primary_location.source.id",
    },
    institutions: {
        emoji: "🏫",
        icon: "mdi-town-hall",
        name: "institutions",
        displayName: "institutions",
        displayNameSingular: "institution",
        descr: "Universities and research centers",
        eg: "Harvard University",
        placeholder: "Search academic institutions",
        filterName: "institutions",
        filterKey: "authorships.institutions.id",
    },
    concepts: {
        emoji: "💡",
        icon: "mdi-lightbulb-outline",
        name: "concepts",
        displayName: "concepts",
        displayNameSingular: "concept",
        descr: "Topics and fields of study",
        eg: "History",
        placeholder: "Search topics",
        filterName: "concepts",
        filterKey: "concepts.id",
    },


}

export {
    entityConfigs,
}