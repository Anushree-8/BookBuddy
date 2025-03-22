export const books = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    author: "John Smith",
    category: "Computer Science",
    condition: "Good",
    price: 25.99,
    description: "A comprehensive introduction to the fundamentals of computer science. Covers algorithms, data structures, and basic programming concepts.",
    image: "/images/books/book-1.jpg",
    sellerId: 2,
    created: "2025-02-15T14:22:00Z"
  },
  {
    id: 2,
    title: "Organic Chemistry",
    author: "Maria Johnson",
    category: "Chemistry",
    condition: "Like New",
    price: 35.50,
    description: "Advanced textbook covering organic chemistry principles, reactions, and laboratory techniques for university students.",
    image: "/images/books/book-2.jpg",
    sellerId: 3,
    created: "2025-02-18T09:45:00Z"
  },
  {
    id: 3,
    title: "World History: Ancient Civilizations",
    author: "David Thompson",
    category: "History",
    condition: "Acceptable",
    price: 15.00,
    description: "Explore ancient civilizations from Mesopotamia to Rome. Includes timelines, maps, and cultural insights.",
    image: "/images/books/book-3.jpg",
    sellerId: 1,
    created: "2025-03-01T16:30:00Z"
  },
  {
    id: 4,
    title: "Calculus for Engineers",
    author: "Robert Chen",
    category: "Mathematics",
    condition: "Good",
    price: 30.00,
    description: "Applied calculus with engineering examples and problems. Includes differential equations and vector calculus.",
    image: "/images/books/book-4.jpg",
    sellerId: 4,
    created: "2025-03-05T11:15:00Z"
  },
  {
    id: 5,
    title: "Introduction to Psychology",
    author: "Sarah Adams",
    category: "Psychology",
    condition: "Like New",
    price: 28.50,
    description: "First-year university textbook covering all major psychological theories, research methods, and key studies.",
    image: "/images/books/book-5.jpg",
    sellerId: 2,
    created: "2025-03-10T14:00:00Z"
  },
  {
    id: 6,
    title: "Modern Physics",
    author: "Alan Parker",
    category: "Physics",
    condition: "Very Good",
    price: 40.00,
    description: "Covers quantum mechanics, relativity, and nuclear physics for advanced undergraduate students.",
    image: "/images/books/book-6.jpg",
    sellerId: 5,
    created: "2025-03-12T10:30:00Z"
  }
];

export const categories = [
  { id: 1, name: "Computer Science", count: 132 },
  { id: 2, name: "Mathematics", count: 97 },
  { id: 3, name: "Physics", count: 85 },
  { id: 4, name: "Chemistry", count: 76 },
  { id: 5, name: "Biology", count: 68 },
  { id: 6, name: "History", count: 122 },
  { id: 7, name: "Literature", count: 143 },
  { id: 8, name: "Psychology", count: 91 }
];

export const users = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane@example.com",
    avatar: "/images/avatars/user-1.jpg",
    joinDate: "2024-09-12T00:00:00Z",
    rating: 4.8
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "/images/avatars/user-2.jpg",
    joinDate: "2024-10-05T00:00:00Z",
    rating: 4.6
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "/images/avatars/user-3.jpg",
    joinDate: "2024-11-18T00:00:00Z",
    rating: 4.9
  },
  {
    id: 4,
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/images/avatars/user-4.jpg",
    joinDate: "2024-12-30T00:00:00Z",
    rating: 4.3
  },
  {
    id: 5,
    name: "Samantha Wilson",
    email: "samantha@example.com",
    avatar: "/images/avatars/user-5.jpg",
    joinDate: "2025-01-15T00:00:00Z",
    rating: 4.7
  }
];

export const messages = [
  {
    id: 1,
    senderId: 2,
    receiverId: 1,
    bookId: 3,
    text: "Is this book still available? Does it have any highlighting or notes?",
    timestamp: "2025-03-15T14:22:00Z",
    read: true
  },
  {
    id: 2,
    senderId: 1,
    receiverId: 2,
    bookId: 3,
    text: "Yes, it's available. There are some notes in the margins of the first few chapters but no highlighting.",
    timestamp: "2025-03-15T15:10:00Z",
    read: true
  },
  {
    id: 3,
    senderId: 2,
    receiverId: 1,
    bookId: 3,
    text: "Great! I'm interested in buying it. Would you accept $12 instead of $15?",
    timestamp: "2025-03-15T15:45:00Z",
    read: false
  },
  {
    id: 4,
    senderId: 3,
    receiverId: 5,
    bookId: 6,
    text: "Hello, I noticed you're selling Modern Physics. I have the lab manual for that course. Would you be interested in trading?",
    timestamp: "2025-03-16T09:30:00Z",
    read: false
  }
];

export const feedback = [
  {
    id: 1,
    reviewerId: 2,
    sellerId: 3,
    bookId: 2,
    rating: 5,
    comment: "Book was in perfect condition as described. Quick and easy transaction.",
    timestamp: "2025-03-10T14:22:00Z"
  },
  {
    id: 2,
    reviewerId: 1,
    sellerId: 4,
    bookId: 4,
    rating: 4,
    comment: "Good condition, but had more wear than I expected. Still a good purchase overall.",
    timestamp: "2025-03-12T16:45:00Z"
  },
  {
    id: 3,
    reviewerId: 5,
    sellerId: 2,
    bookId: 5,
    rating: 5,
    comment: "Excellent seller. Book was like new and seller was very responsive.",
    timestamp: "2025-03-15T11:30:00Z"
  }
];