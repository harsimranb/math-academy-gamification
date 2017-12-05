const mongojs = require('mongojs')

/*
Here we will provision some sample data for this application.
*/
const db = mongojs("mongodb://localhost:27017/mathAcademy");
db.on('error', function (err) {
	return console.dir('database error', err)
})

if (!db.missions) {
  db.createCollection("missions" , function(err, res){
    console.log('Missions collection created!');
  });
  setTimeout(function() {}, 3000);
}

const missionsCollection = db.missions;

const sampleMissionData = [
  {
    name: "Arithmetic",
    description: "This mission will test your arithmetic skills.",
    excercises: [{
      title: "Addition: What is 61 + 79?",
      description: "Are you up for some addition? Are your addition skills up-to-par?!",
      options: [
        {
          id: 1,
          text: '111',
        },
        {
          id: 2,
          text: '140',
        },
        {
          id: 3,
          text: '130',
        },
        {
          id: 4,
          text: '211',
        }
      ],
      correctOptionId: 2,
    },{
      title: "Subtraction: What is 61 - 79?",
      description: "Are you up for some subtraction? Are your addition skills up-to-par?!",
      options: [
        {
          id: 1,
          text: '-18',
        },
        {
          id: 2,
          text: '0',
        },
        {
          id: 3,
          text: '18',
        },
        {
          id: 4,
          text: '140',
        }
      ],
      correctOptionId: 1,
    }]
  },
  {
    name: "Algebra",
    description: "This mission will test your algebra skills. Are you up for it?!",
    excercises: [{
      title: "7x + 14 = 49",
      description: "What is x?",
      options: [
        {
          id: 1,
          text: '9',
        },
        {
          id: 2,
          text: '2.1',
        },
        {
          id: 3,
          text: '4',
        },
        {
          id: 4,
          text: '5',
        }
      ],
      correctOptionId: 4,
    },{
      title: "What is π2y = 16",
      description: "Are you up for some addition? Are your addition skills up-to-par?!",
      options: [
        {
          id: 1,
          text: '2.54',
        },
        {
          id: 2,
          text: '2.55',
        },
        {
          id: 3,
          text: '2.56',
        },
        {
          id: 4,
          text: '2.57',
        }
      ],
      correctOptionId: 2,
    }]
  },
  {
    name: "Trigonometry",
    description: "This mission will test your trigonometry skills. Do you have what it?!",
    excercises: [{
      title: "In a right triangle ABC, tan(A) = 3/4. Find cos(A).",
      description: "Hint: You don't need a calculator.",
      options: [
        {
          id: 1,
          text: '4/5',
        },
        {
          id: 2,
          text: '3/5',
        },
        {
          id: 3,
          text: '4',
        },
        {
          id: 4,
          text: '3',
        }
      ],
      correctOptionId: 1,
    },{
      title: "In a right triangle ABC, tan(A) = 3/4. Find sin(A).",
      description: "Hint: Use your brain.",
      options: [
        {
          id: 1,
          text: '4/5',
        },
        {
          id: 2,
          text: '3/5',
        },
        {
          id: 3,
          text: '4',
        },
        {
          id: 4,
          text: '3',
        }
      ],
      correctOptionId: 2,
    }]
  },
];

missionsCollection.insert(sampleMissionData, function(err, coll) {
  if (err) {
    return console.dir(err);
  } else
    console.log("Success!");
});

