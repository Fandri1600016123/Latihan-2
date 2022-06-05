Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Fandri Ghozali",
        description:
          "Pekerjaan yang sulit akan mudah dikerjakan apabila kita iklash dan berusaha",
        social: {
          ig: {
            url: "https://www.instagram.com/fandrighozali/?hl=id",
            title: "fandrighozali",
          },
          fb: {
            url: "https://www.facebook.com/fandrighozali//",
            title: "FandriGhozali",
          },
          yt: {
            url: "https://www.youtube.com/channel/UC_ynoRD-DNXWJrHBALoA1pQ",
            title: "Fandri Mochie",
          },
        },
        imageProfile:
          "https://user-images.githubusercontent.com/106541311/172039657-54529308-8251-426e-98c6-22cd04ec6775.png",
      },
      articles: [
        {
          title: 'The Magic of Vue',
          description: "This is your first looping using Vue",
          thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        }
      ]
    };
  },
  mounted:()=>{    
    axios.get("https://raw.githubusercontent.com/Fandri1600016123/Latihan-2/main/Conten/header.json")
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}).mount("#app");
