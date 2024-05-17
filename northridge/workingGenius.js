function workingGenius() {
  return {
    focussedCombo: null,
    focussedGenius: null,
    focussedPerson: null,
    focussedTeam: null,
    geniusSet: [
      "Wonder",
      "Invention",
      "Discernment",
      "Galvanising",
      "Enablement",
      "Tenacity",
    ],
    teams: ["Everyone", "Leadership team", "Board", "Teaching", "Worship", "Kids/Youth"],
    people: [
      new Person(
        "Rob",
        "Giles",
        "https://cdn.churchsuite.com/Nr6TJr3e/user_files/ufewcido.jpg",
        [
          "Discernment",
          "Wonder",
          "Galvanising",
          "Enablement",
          "Tenacity",
          "Invention",
        ],
        ["Everyone", "Leadership team", "Board", "Service teams", "Teaching", "Worship"]
      ),
      new Person(
        "Bonnie",
        "Giles",
        "https://cdn.churchsuite.com/Nr6TJr3e/user_files/3hmb6ztm.jpg",
        [
          "Galvanising",
          "Enablement",
          "Discernment",
          "Invention",
          "Wonder",
          "Tenacity",
        ],
        ["Everyone", "Leadership team", "Board", "Service teams", "Teaching"]
      ),
      new Person(
        "Adam",
        "Smyth",
        "https://northridge-web-storage.s3.ap-southeast-2.amazonaws.com/~northridge/wp-content/uploads/2022/08/12093234/Adam-Smyth-Website-pic-1.png",
        [
          "Discernment",
          "Tenacity",
          "Wonder",
          "Galvanising",
          "Invention",
          "Enablement",
        ],
        ["Everyone", "Leadership team", "Worship", "Teaching", "Service teams"]
      ),
      new Person(
        "Kate",
        "Pryor",
        "https://northridge-web-storage.s3.ap-southeast-2.amazonaws.com/~northridge/wp-content/uploads/2023/09/14093645/Kate-Pryor.png",
        [
          "Enablement",
          "Invention",
          "Tenacity",
          "Discernment",
          "Wonder",
          "Galvanising",
        ],
        ["Everyone", "Service teams", "Kids/Youth"]
      ),
      new Person(
        "Anna",
        "Harding",
        "https://northridge-web-storage.s3.ap-southeast-2.amazonaws.com/~northridge/wp-content/uploads/2022/08/20155053/Untitled-design-2.png",
        [
          "Invention",
          "Galvanising",
          "Enablement",
          "Wonder",
          "Discernment",
          "Tenacity",
        ],
        ["Everyone", "Leadership team", "Teaching", "Service teams"]
      ),
      new Person(
        "Ben",
        "Hellstrom",
        "https://northridge-web-storage.s3.ap-southeast-2.amazonaws.com/~northridge/wp-content/uploads/2024/01/17122612/Ben-Hellstrom.jpg",
        [
          "Invention",
          "Enablement",
          "Discernment",
          "Galvanising",
          "Wonder",
          "Tenacity",
        ],
        ["Everyone", "Teaching", "Service teams"]
      ),
      new Person(
        "Andy",
        "Raynor",
        "https://northridge-web-storage.s3.ap-southeast-2.amazonaws.com/~northridge/wp-content/uploads/2024/04/12105935/Andy.png",
        [
          "Discernment",
          "Wonder",
          "Enablement",
          "Galvanising",
          "Invention",
          "Tenacity",
        ],
        ["Everyone", "Kids/Youth"]
      ),
    ],
    view: "people",

    geniuses: [
      {
        genius: 'Wonder',
        description: 'The natural gift of pondering the possibility of greater potential and opportunity in a given situation.',
        attributes: [
          'Are we fulfilling our potential, could we be better?',
          'Naturally sits, ponders and speculates.',
        ],
      },
      {
        genius: 'Invention',
        description: 'The natural gift of creating original and novel ideas and solutions.',
        attributes: [
          'Loves a blank slate and a new problem to solve.',
          'Naturally creates new concepts, even when it’s not necessary!',
        ],
      },
      {
        genius: 'Discernment',
        description: 'The natural gift of intuitively and instinctively evaluating ideas and situations.',
        attributes: [
          'Easily spots patterns and knows how to evaluate and discern things.',
          'Sees what’s invented and knows if it will work.',
          'Relies on gut more than data.',
        ],
      },
      {
        genius: 'Galvanising',
        description: 'The natural gift of rallying, inspiring and organising others to take action.',
        attributes: [
          'Pushes people forward to do something new.',
          'Can organise in order to get things going.',
          'Carries energy and enthusiasm.',
        ],
      },
      {
        genius: 'Enablement',
        description: 'The natural gift of providing encouragement and assistance for an idea or project.',
        attributes: [
          'You need help and I’ll help you get this done…',
          'Don’t want a generic task, looks for specifics.',
          'Needed to make the ideas happen.',
        ],
      },
      {
        genius: 'Tenacity',
        description: 'The natural gift of pushing projects or tasks to completion to achieve results.',
        attributes: [
          'Joy from finishing and crossing things off the list.',
          'Love to see the impact and results of finishing.',
        ],
      },
    ],

    combos: [
      {
        combo: "WI",
        orderedCombo: "IW",
        name: "WI - Creative Dreamer",
        description:
          "Have a journal of ideas they have that they've never implemented. Walk around with a fount full of ideas in their head. Regardless of what they do they come up with creative ideas wherever they go. The come up with ideas, sometimes they're practical and sometimes they're not. They don't necessarily refine their ideas in order to make them practical. This person isn't typically suited to the main and plain, to routine jobs - they're looking for more than simply a process to follow.",
      },
      {
        combo: "WD",
        orderedCombo: "DW",
        name: "WD - Contemplative Counsellor",
        description:
          'Both someone who is "in their head" pondering and coming up with ideas, but also able to hear other people\'s ideas and helps them to discern them. Someone who might say "have you thought about this?" or "have you tried out...?". They can be a little hesitant and nuanced - they want to make sure that they\'ve really thought something through so that it\'s just right.',
      },
      {
        combo: "WG",
        orderedCombo: "GW",
        name: "WG - Philosophical Motivator",
        description:
          'Least frequent type found. Can explore a lot of different possibilities and gain a lot of excitement from different things in their life. They enjoy thinking big picture thoughts and they get energy from exploring those with others and then galvanising others around those ideas. Can be a little confusing as they simultaneously saying "let\'s do it", but also "...but perhaps not". It can seem like they can communicate conflicting messages about the same thing - "let\'s get out there and take on that competitor" / "ooh, but they\'re very powerful and have great marketing, so maybe we shouldn\'t". Very thoughtful and really likely to encourage action.',
      },
      {
        combo: "WE",
        orderedCombo: "EW",
        name: "WE - Idealistic Supporter",
        description:
          "They think about things and if there's a cause they believe in, they'll do everything they can to support people involved in that cause. These people walk around and ask questions about what's possible based on their environment and then immediately respond to that. They can be easily overrun as they're responsive to their environment and then also responsive to the people around them. They might find themselves taking on too much as a result of this combo.",
      },
      {
        combo: "WT",
        orderedCombo: "TW",
        name: "WT - Careful Implementor",
        description:
          "They like to get stuff done, but they're also pretty careful and pretty cautious. Really deep thinker, but also deeply motivated. Living at both 50,000 feet and also 5 feet from the ground can leave them feeling pretty conflicted and torn; pulled between the clouds and the pavement. Bursts of energy (T) to get things done and then periods as they take a step back to assess where they're at and what they've done (W). Decision making and progress can lead to some angst and anxiety as they're nuanced about the direction. Can find themselves heading back to Wonder towards the end of a piece of work when Tenacity is required; this is a real challenge for them.",
      },
      {
        combo: "ID",
        orderedCombo: "DI",
        name: "ID - Discriminating Ideator",
        description:
          "Lots of new ideas, but really love vetting them internally - \"I have an idea, is it going to work?\". However, no inventor can truly vet their own ideas - a second person is required for feedback and to help discern those ideas. The rough draft is generally pretty good from these people - it's 80% of the way, but they still need to invite other people into the process to help them discern the ideas effectively. Not a lot of really bad drafts get through their internal filter, but they really struggle to fully refine their ideas and need to lean on others to help here. They can be very insitent in their ideas (since they've both invented and discerned them), so need strong characters around them as they can be difficult to disagree with.",
      },
      {
        combo: "IG",
        orderedCombo: "GI",
        name: "IG - Evangelising Innovator",
        description:
          "They're an innovator, but they have a strong \"sales\" side to them - they're excited about their ideas and that excitement is genuine! They love to get others excited about their ideas, they're born salespeople and motivators who evangelise their own ideas. If they've got an idea, you're going to hear about it - they don't write their ideas down in a journal, they tell others about them to see what sticks. They immediately start getting energy around their ideas, often ideas that they simply came up with that morning! Sometimes they can be hasty and too quick to move. They can also seem over the top and inauthentic - they can seem over eager to sell an idea. ",
      },
      {
        combo: "IE",
        orderedCombo: "EI",
        name: "IE - Adaptable Designer",
        description:
          "Come up with new ideas, but if there's an objection they're quick to say \"you don't like that? I'll tweak that for you, no problem\". Great at both new ideas and also customer service. Lots of new ideas, but not necessarily wedded to them, simply wants to serve their customers. Sometimes they can be too defferential and struggle to push their own idea when they sense it's the best one, leaning more into their E and choosing to make the customer happy. May not be the most proactive person since they're reactive to others.",
      },
      {
        combo: "IT",
        orderedCombo: "IT",
        name: "IT - Methodical Architect",
        description:
          "Very analytical and hard working. Someone with great and practical ideas that they're able to implement. Sometimes they can be overly analytical - \"I designed this, so this is the way it's going to work\", they can be overly wedded to the way they first envisaged something would be done. Nuance and flexibility are probably not their strength! Someone who has a lot of ideas... that they've already finished. Can find themselves having gotten to the end of the process before realising that they should really have refined the idea before they started working on it. Trial and error is how they explore the workability of things - they move straight from ideation to implementation, sometimes changing the implementation multiple times before they find the right fit (because they skipped the activation process). Less likely to ask for discernment because they're focussed on moving forward and getting to the end.",
      },
      {
        combo: "DG",
        orderedCombo: "DG",
        name: "DG - Intuitive Activator",
        description:
          "Good sense of what's a good idea very early in the process. They give confidence to others because they know that their judgement can be well trusted. Others know that if this person it trying to rally people around an idea, it's going to be a good one. As soon as they hear an idea that they're convinced is a good one, they immediately move towards galvanising people around that idea and getting them on board. They can be overly confident that they've got something right; \"rarely wrong, but never in doubt\". They can move too quickly, moving swiftly from D to G, which can be too fast for some others.",
      },
      {
        combo: "DE",
        orderedCombo: "DE",
        name: "DE - Insightful Collaborator",
        description:
          "Come alongside others saying \"I really want to help you, but before I do I'm going to ask some questions to make sure that it's actually what you need\". These people get asked to help a lot because they're quick to say \"yes\", but also because they can make sure that a process is well-formed before it begins. Sometimes they might find it hard to push back when they don't think something is a great idea, but they're afraid to tell you right away. They can find themselves taking on too much, having started with simply discerning an idea, they can quickly take on the burden of getting an idea into implementation. They need clear boundaries and guidance around whether they are being asked to Discern, Enable or both.",
      },
      {
        combo: "DT",
        orderedCombo: "DT",
        name: "DT - Judicious Accomplisher",
        description:
          "It's not just about getting stuff done, it about getting the right stuff done. These are very productive people; once they've decided that something is a good decision, they're all in and will crank through the work. They have one foot in activation and the other in implementation. Tenacity can carry a lot of weight in a person, so it's important for this person to make sure that they're choosing to discern first before they allow their tenacity to kick in. There's an angst in this person because they're both judging something but at the same time they really want to get it done. When someone's lazy, they can get pretty frustated at that person. They're really frustrated by inefficiency and things that are not done well.",
      },
      {
        combo: "GE",
        orderedCombo: "EG",
        name: "GE - Enthusiastic Encourager",
        description:
          "Positive, enthusiastic, affirming and life-giving people. The people thrive in roles like a fundraiser and relationship management - they bring real energy to helping others. They are ralliers, whipping up support and bringing people to action. They can, however, affirm too much, avoiding difficult feedback. They need to make sure that their encouragement is well-directed.",
      },
      {
        combo: "GT",
        orderedCombo: "GT",
        name: "GT - Assertive Driver",
        description:
          '"The butt kicker" - they love to get people on board and get it done right away. They get joy and energy by getting others on board with an idea, but then joining them in doing the hard work in order to get the thing done. They\'re a double disruptive type, but can feel very impatient and fast at times. They would be very frustrated in an environment where you have to be very defferential and do things "the right way". When they see someone who\'s not getting their work done, they\'re going to tell them. They can find themselves regularly bulldozing others, which can be helpful at times, but equally unhelpful too.',
      },
      {
        combo: "ET",
        orderedCombo: "ET",
        name: "ET - Loyal Finisher",
        description:
          "Immensely employable people - reliable, responsive to the needs, don't have to be managed hard in order to keep going. Incredibly valuable people, but they easily over-volunteer. They can get taken advantage of because they're responsive to the needs of others and then once they've responded, they're determined to see the task through to the end. The things they want to do can be overwhelming at times. They can over-stretch themselves and might well quit or get really sick before they tell you they have too much on their plate. They have extreme loyalty to the person who asked them to help with a task and then also to the process of seeing the task through to completion. It's easy not to give them the praise that they deserve, thinking \"that's just who they are\". People of this type can easily find themselves burning out as they're fully within the implementation phase - they need to be self aware to prevent this.",
      },
    ],

    geniusCombo(person) {
      let personCombo = person
        .geniuses()
        .map((genius) => genius.substring(0, 1))
        .sort()
        .join("");

      return this.combos
        .filter((combo) => combo.orderedCombo == personCombo)
        .pop();
    },

    geniusAttributes() {
      return this.geniuses.filter(genius => genius.genius == this.focussedGenius).pop().attributes
    },

    geniusDescription() {
      return this.geniuses.filter(genius => genius.genius == this.focussedGenius).pop().description
    },

    peopleInTeam() {
      return this.people.filter((person) =>
        person.teams.includes(this.focussedTeam)
      );
    },

    peopleWithCompetency(teamName, focussedGenius) {
      let people =
        typeof teamName !== "undefined" ? this.peopleInTeam() : this.people;
      focussedGenius =
        typeof focussedGenius !== "undefined"
          ? focussedGenius
          : this.focussedGenius;

      return people.filter((person) =>
        person.competencies().includes(focussedGenius)
      );
    },

    peopleWithFrustration(teamName, focussedGenius) {
      let people =
        typeof teamName !== "undefined" ? this.peopleInTeam() : this.people;
      focussedGenius =
        typeof focussedGenius !== "undefined"
          ? focussedGenius
          : this.focussedGenius;

      return people.filter((person) =>
        person.frustrations().includes(focussedGenius)
      );
    },

    peopleWithGenius(teamName, focussedGenius) {
      let people =
        typeof teamName !== "undefined" ? this.peopleInTeam() : this.people;
      focussedGenius =
        typeof focussedGenius !== "undefined"
          ? focussedGenius
          : this.focussedGenius;

      return people.filter((person) =>
        person.geniuses().includes(focussedGenius)
      );
    },

    setFocussedCombo(combo) {
      this.focussedCombo = combo;
      this.view = "combo." + combo;

      this.$nextTick(() => {
        const divCombo = document.getElementById('combo'+combo)

        divCombo.scrollIntoView({block: "center", behavior: "smooth"});
      })
    },

    setFocussedGenius(geniusName) {
      this.focussedGenius = geniusName;
      this.view = "genius." + geniusName.toLowerCase();
    },

    setFocussedPerson(person) {
      this.focussedPerson = person;
      this.view = "person." + person.id;
    },

    setFocussedTeam(teamName) {
      this.focussedTeam = teamName;
      this.view = "team." + teamName;
    },

    setView(view) {
      if (view.startsWith("genius")) {
        // go from "genius.wonder" to just "wonder"
        let genius = view.split(".").pop();
        // ucfirst the genius
        genius = genius.charAt(0).toUpperCase() + genius.slice(1);
        this.setFocussedGenius(genius);
      } else if (view.startsWith("person")) {
        let personId = view.split(".").pop();

        this.setFocussedPerson(
          this.people.filter((person) => person.id === personId).pop()
        );
      } else if (view.startsWith("team")) {
        this.setFocussedTeam(view.substring(5));
      } else if (view.startsWith("combo")) {
        this.setFocussedCombo(view.substring(6));
      } else {
        this.view = view;
      }
    },
  };
}

class Person {
  constructor(firstName, lastName, img, allGeniuses, teams) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.img = img;
    this.allGeniuses = allGeniuses;
    this.teams = teams;
  }

  competencies() {
    return this.allGeniuses.slice(2, 4);
  }

  frustrations() {
    return this.allGeniuses.slice(4, 6);
  }

  geniuses() {
    return this.allGeniuses.slice(0, 2);
  }

  get id() {
    return this.firstName.substring(0, 2) + this.lastName.substring(0, 2);
  }

  get name() {
    return this.firstName + " " + this.lastName;
  }
}
