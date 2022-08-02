    const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const name = document.querySelector(".in4_author");
  const job = document.querySelector(".in4_job");
  const infor = document.querySelector(".in4_info");
  const img = document.querySelector(".bai3_content img");
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");

//   console.log(name, job, infor,img);

const random = document.querySelector(".bai3_random");

var numberRandom = 0;

function text(){
  img.src = reviews[numberRandom].img;
  name.textContent = reviews[numberRandom].name;
  job.textContent = reviews[numberRandom].job;
  infor.textContent = reviews[numberRandom].text;
};

random.addEventListener('click', function() {
    numberRandom = Math.floor(Math.random()*reviews.length);
    // img.src = reviews[numberRandom].img;
    // name.textContent = reviews[numberRandom].name;
    // job.textContent = reviews[numberRandom].job;
    // infor.textContent = reviews[numberRandom].text;
    text();
});

prev.addEventListener('click', function() {
    if(numberRandom > 0){
      numberRandom--;
      // img.src = reviews[numberRandom].img;
      // name.textContent = reviews[numberRandom].name;
      // job.textContent = reviews[numberRandom].job;
      // infor.textContent = reviews[numberRandom].text;
      text();
    }
    else {
      numberRandom = 3;
      // img.src = reviews[numberRandom].img;
      // name.textContent = reviews[numberRandom].name;
      // job.textContent = reviews[numberRandom].job;
      // infor.textContent = reviews[numberRandom].text;
      text();
    }
});

next.addEventListener('click', function() {
  if(numberRandom < 3){
    numberRandom++;
    // img.src = reviews[numberRandom].img;
    // name.textContent = reviews[numberRandom].name;
    // job.textContent = reviews[numberRandom].job;
    // infor.textContent = reviews[numberRandom].text;
    text();
  }
  else {
    numberRandom = 0;
    // img.src = reviews[numberRandom].img;
    // name.textContent = reviews[numberRandom].name;
    // job.textContent = reviews[numberRandom].job;
    // infor.textContent = reviews[numberRandom].text;
    text();
  }
});
