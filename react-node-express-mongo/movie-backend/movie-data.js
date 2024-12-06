const movies = [
    {
      title: "The Warrior's Path",
      description: "A brave warrior embarks on a journey to save his kingdom from an ancient curse.",
      releaseDate: "2023-07-14",
      languages: ["English", "Hindi", "Telugu"],
      genres: ["Action", "Drama", "Thriller"],
      format: ["2D", "3D"],
      cast: ["John Smith", "Aarav Kapoor", "Meera Shenoy", "Nisha Verma"],
      crew: {
        director: "Rajat Mishra",
        writer: "Lila Thompson",
        producers: ["Aditya Rao", "Sophia Green"]
      },
      duration: "2h 25m"
    },
    {
      title: "Laugh Till You Drop",
      description: "A light-hearted comedy about three friends on a chaotic road trip.",
      releaseDate: "2024-01-22",
      languages: ["English", "Hindi"],
      genres: ["Comedy", "Family"],
      format: ["2D"],
      cast: ["Chris Walker", "Rajiv Sinha", "Ananya Iyer"],
      crew: {
        director: "Karan Mehta",
        writer: "Olivia Brown",
        producers: ["Manisha Patel", "Jake Wilson"]
      },
      duration: "1h 50m"
    },
    {
      title: "Shadows of the Past",
      description: "A thriller that uncovers dark secrets as a detective investigates a series of mysterious disappearances.",
      releaseDate: "2022-09-10",
      languages: ["English", "Telugu"],
      genres: ["Thriller", "Action"],
      format: ["2D", "3D"],
      cast: ["Emily Carter", "Rohan Das", "Siddharth Menon"],
      crew: {
        director: "Anjali Nair",
        writer: "Thomas Grey",
        producers: ["Priya Singh", "Ethan Blake"]
      },
      duration: "2h 10m"
    },
    {
      title: "A Tale of Two Hearts",
      description: "A heartwarming love story that spans decades and continents.",
      releaseDate: "2021-11-15",
      languages: ["English", "Hindi"],
      genres: ["Drama", "Family"],
      format: ["2D"],
      cast: ["Isabella Roy", "Kunal Malhotra", "Sneha Pillai"],
      crew: {
        director: "Rohit Sharma",
        writer: "Claire Watson",
        producers: ["Aditi Desai", "Michael Foster"]
      },
      duration: "2h 5m"
    },
    {
      title: "Galactic Voyage",
      description: "An epic sci-fi adventure about humanity's first interstellar mission.",
      releaseDate: "2023-12-18",
      languages: ["English", "Telugu"],
      genres: ["Action", "Drama"],
      format: ["3D"],
      cast: ["Aaron Hughes", "Shreya Kulkarni", "Neeraj Singh"],
      crew: {
        director: "Tanvi Rao",
        writer: "Elliot King",
        producers: ["Dhruv Pandey", "Jessica Wright"]
      },
      duration: "2h 30m"
    },
    {
      title: "Eternal Bond",
      description: "A mystical love story set in the backdrop of reincarnation and ancient legends.",
      releaseDate: "2024-03-20",
      languages: ["Telugu", "Hindi"],
      genres: ["Drama", "Fantasy", "Romance"],
      format: ["2D"],
      cast: ["Ravi Teja", "Alia Bhatt", "Keerthy Suresh"],
      crew: {
        director: "Sanjay Gupta",
        writer: "Sneha Reddy",
        producers: ["Vivek Reddy", "Rajesh Iyer"]
      },
      duration: "2h 15m"
    },
    {
      title: "Mission X",
      description: "A team of elite agents must stop a global cyber-attack orchestrated by a rogue AI.",
      releaseDate: "2024-05-10",
      languages: ["Telugu", "Hindi"],
      genres: ["Action", "Thriller", "Sci-Fi"],
      format: ["2D", "3D"],
      cast: ["Vijay Deverakonda", "Shraddha Kapoor", "Pooja Hegde"],
      crew: {
        director: "Ramesh Varma",
        writer: "Arjun Singh",
        producers: ["Nisha Gupta", "Rahul Bhatnagar"]
      },
      duration: "2h 20m"
    },
    {
      title: "The Silent Melody",
      description: "A young woman who cannot hear discovers her talent for dance and inspires her village.",
      releaseDate: "2024-08-15",
      languages: ["Telugu", "Hindi"],
      genres: ["Drama", "Family", "Musical"],
      format: ["2D"],
      cast: ["Sai Pallavi", "Rajkummar Rao", "Anushka Shetty"],
      crew: {
        director: "Krishna Chaitanya",
        writer: "Ritika Chopra",
        producers: ["Suresh Babu", "Amrita Jain"]
      },
      duration: "2h 5m"
    },
    {
      title: "Trailblazer",
      description: "The inspiring story of an Indian athlete's journey to the Olympics.",
      releaseDate: "2024-10-02",
      languages: ["Telugu", "Hindi"],
      genres: ["Drama", "Biography", "Sports"],
      format: ["2D"],
      cast: ["Dulquer Salmaan", "Taapsee Pannu", "Aparna Balamurali"],
      crew: {
        director: "Megha Reddy",
        writer: "Karan Kashyap",
        producers: ["Anil Kapoor", "Sumanth Reddy"]
      },
      duration: "2h 30m"
    },
    {
      title: "Dark Horizon",
      description: "A post-apocalyptic thriller where survivors must unite to fend off mysterious invaders.",
      releaseDate: "2024-12-12",
      languages: ["Telugu", "Hindi"],
      genres: ["Thriller", "Action", "Sci-Fi"],
      format: ["2D", "3D"],
      cast: ["Prabhas", "Kriti Sanon", "Nani"],
      crew: {
        director: "S.S. Rajamouli",
        writer: "K.V. Vijayendra Prasad",
        producers: ["Allu Aravind", "Ritesh Sidhwani"]
      },
      duration: "2h 40m"
    }
  ];
  