const STUDENTS = [
    [
        "Neo",
        "neo@matrix.com",
        "Tacoma",
    ],
    [
        "Morpheus",
        "morpheus@matrix.com",
        "Tacoma",
    ],
    [
        "Trinity",
        "trinity@matrix.com",
        "Spokane",
    ],
    [
        "Cypher",
        "cypher@matrix.com",
        "Seattle",
    ],
    [
        "The Oracle",
        "oracle@matrix.com",
        "Marysville",
    ],
    [
        "Agent Smith",
        "smith@matrix.com",
        "Bellingham",
    ]
]

class Students {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.comminity = community;
    }
}

class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = (students === undefined) ? [] : students;
    }
}