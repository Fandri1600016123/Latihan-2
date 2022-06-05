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
          title: 'Keahlian Editor',
          description: 'Tingkat Keahlian : ★★★★',
          thumbnail: 'https://user-images.githubusercontent.com/106541311/172039662-b34890eb-b874-4ee4-a68a-b406768bb070.png'
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
