const lawyerPhoto = 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1'
const attachPhoto = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
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
    bio: "Lorem Ipsum"
  },
  {
    id: 2,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 1,
    bio: "Lorem Ipsum"
  },
  {
    id: 3,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 0,
    bio: "Lorem Ipsum"
  },
  {
    id: 4,
    name: 'Amir Fawzy',
    office: 'Offica A',
    major: "financial",
    photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
    rate: 5,
    bio: "Lorem Ipsum"
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
      photo: lawyerPhoto
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
        photo: lawyerPhoto
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
      photo: lawyerPhoto
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
        photo: lawyerPhoto
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
      photo: lawyerPhoto
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
        photo: lawyerPhoto
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
      photo: lawyerPhoto
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
        photo: lawyerPhoto
      }
    }
  }
]

export const mockAnswers = [
  {
    id: 1,
    addedOn: "01/01/19",
    body: answerBody,
    acceptedOn: "01/01/19",
    rejectedOn: "01/01/19",
    by: {
      id: 1,
      name: 'Amir Fawzy',
      photo: lawyerPhoto
    }
  }
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

export const mockContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`