axios.interceptors.request.use((request) => {
    console.log("REQUEST INCOMMING");
  
    return request;
  });
  axios.interceptors.response.use((response) => {
    console.log("RESPONSE INCOMMING");
    return response;
  });
  function getData() {
    // try {
    //   let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    //   let json = await response.json();
    //   console.log(json);
    // } catch (err) {
    //   console.log("FAILED", err);
    // }
    const controller = new AbortController();
  
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1", {
        signal: controller.signal,
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
    setTimeout(() => {
      controller.abort();
      console.log("aborted");
    }, 1000);
  }