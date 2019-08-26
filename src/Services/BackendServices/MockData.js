//const lawyerPhoto = 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1'
export const attachPhoto = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
const answerBody = `عقوبة الشيك بدون رصيد في السعودية
من بين العديد من انواع العقوبات المختلفة التي تم وضعها في القانون السعودي ما تعلق بأمر الشيكات ، حيث تم سن عدد من العقوبات لمن يتهرب من دفع مبالغ شيكات او يثبت تحريره لها بدون رصيد.

القضية الخاصة بالشيكات بدون رصيد
– قضية الشيكات بدون رصيد ما زالت تمثل مصدر خوف وقلق في مجال الأعمال، حيث تعتبر الشيكات هي وسيلة من الوسائل التي يتعامل بها القطاعات بصورة أساسية ورئيسية في تسوية الأموال بين أطراف محددة.

– ولا تقتصر هذه القضية في هذا القطاع فقط بل يوجد تبعات لهذه القضية بشكل أكبر وأوسع في الاقتصاد وذلك لأنها تنعكس على الأداء الخاص بالنظام المصرفي والنقدي وينتج عنها فقدان الثقة في الأوراق التجارية.

`
export const mockLawyersList = [
  {
    id: 1,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 3,
    bio: `I am an associate at KaiserDillon PLLC. My practice focuses on complex civil litigation, government investigations, professional responsibility and white collar criminal matters.`
  },
  {
    id: 2,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 1,
    bio: `I am an associate at KaiserDillon PLLC. My practice focuses on complex civil litigation, government investigations, professional responsibility and white collar criminal matters.`
  },
  {
    id: 3,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 0,
    bio: `I am an associate at KaiserDillon PLLC. My practice focuses on complex civil litigation, government investigations, professional responsibility and white collar criminal matters.`
  },
  {
    id: 4,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 5,
    bio: `I am an associate at KaiserDillon PLLC. My practice focuses on complex civil litigation, government investigations, professional responsibility and white collar criminal matters.`
  },
]
export const mockTopics = [
  { id: 1, name: 'ALL TOPICS' },
  { id: 2, name: 'Topic 1' },
  { id: 3, name: 'Topic 2' },
  { id: 4, name: 'Topic 3' },
  { id: 5, name: 'Topic 4' }
]

export const mockAllQuestions = [
  {
    id: 1,
    title: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
    body: "Lorem Ipsum",
    topic: {
      id: 1,
      name: "Topic 1"
    },
    addedOn: "01/01/19",
    by: {
      id: 1,
      name: 'Emma Brown',
      photo: attachPhoto
    },
    lastActivity: {
      type: "answer",
      addedOn: "01/01/19",
      isAccepted: true,
      isRejected: true,
      isExpired: true,
      by: {
        id: 1,
        name: 'Amir Fawzy',
        type: "lawyer|user",
        photo: attachPhoto
      }
    }
  },
  {
    id: 2,
    title: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
    body: "Lorem Ipsum",
    topic: {
      id: 2,
      name: "Topic 2"
    },
    addedOn: "01/01/19",
    by: {
      id: 2,
      name: 'Ahmed',
      photo: attachPhoto
    },
    lastActivity: {
      type: "lock",
      addedOn: "01/01/19",
      isAccepted: true,
      isRejected: true,
      isExpired: true,
      by: {
        id: 1,
        name: 'Amir Fawzy',
        type: "lawyer|user",
        photo: attachPhoto
      }
    }
  },
  {
    id: 3,
    title: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
    body: "Lorem Ipsum",
    topic: {
      id: 3,
      name: "Topic 3"
    },
    addedOn: "01/01/19",
    by: {
      id: 3,
      name: 'Mohamed',
      photo: attachPhoto
    },
    lastActivity: {
      type: "answer",
      addedOn: "01/01/19",
      isAccepted: true,
      isRejected: true,
      isExpired: true,
      by: {
        id: 1,
        name: 'Amir Fawzy',
        type: "lawyer|user",
        photo: attachPhoto
      }
    }
  },
  {
    id: 4,
    title: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
    body: "Lorem Ipsum",
    topic: {
      id: 4,
      name: "Topic 4"
    },
    addedOn: "01/01/19",
    by: {
      id: 4,
      name: 'Sameh',
      photo: attachPhoto
    },
    lastActivity: {
      type: "answer",
      addedOn: "01/01/19",
      isAccepted: true,
      isRejected: true,
      isExpired: true,
      by: {
        id: 1,
        name: 'Amir Fawzy',
        type: "lawyer|user",
        photo: attachPhoto
      }
    }
  }
]

export const mockAnswers = [
 {
    id: 1,
    addedOn: Date.UTC(2019, 1, 21, 13, 40, 30, 20), 
    body: answerBody,
    rate: null,
    acceptedOn: "01/01/19",
    rejectedOn: "01/01/19",
    by: {
      id: 1,
      name: 'Amir Fawzy',
      photo: attachPhoto
    }
  },
  {
    id: 2,
    addedOn: Date.UTC(2019, 1, 21, 13, 40, 30, 20), 
    body: answerBody,
    rate: null,
    acceptedOn: "01/01/19",
    rejectedOn: "01/01/19",
    by: {
      id: 1,
      name: 'Amir Fawzy',
      photo: attachPhoto
    }
  },
]

export const mockAttachs = {
    1 : [
      {
        id: 1,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 2,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 3,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      }
    ],
    2 : [
      {
        id: 1,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 2,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 3,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      }
    ],
    3 : [
      {
        id: 1,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 2,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 3,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      }
    ],
    4 : [
      {
        id: 1,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 2,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      },
      {
        id: 3,
        type: "image|document",
        isPublic: true,
        link: attachPhoto
      }
    ],
}

export const aboutUs = `With My lawyer, you have your lawyer always with you ..
Get the fastest answer for any legal inquiry!
My lawyer makes it very easy to connect with many certified lawyers any time,
To ask about cases and legal advices.
You can also contact any lawyer privately, with confidentiality.

- ask any lawyer public/ private 
- You can accept or decline the answer to your inquiry 
- You can Rate lawyers
- many types of cases .. sivil , criminal ... etc.`

export const terms = `We do not own any data, information or material ("Content") that you submit in the Mobile Application in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content in the Mobile Application submitted or created using our Services by you. Unless specifically permitted by you, your use of the Mobile Application does not grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose. But you grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you.`