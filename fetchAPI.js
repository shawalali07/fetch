document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getApi").addEventListener("click", getApi);
document.getElementById("addPost").addEventListener("submit", addPost);

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "<h2>Users</h2>";
      data.forEach(function (user) {
        output += `
          <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
          </ul>
          `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>API Data</h2>";
      console.log(output);
      data.forEach(function (user) {
        output += `
            <ul>
            <h2>Title: ${user.title}</h2>
            <p>Body: ${user.body}</p>
            </ul>
          
            `;
      });

      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .then((data) => console.log("1", data));
}

function getAPI() {
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    console.log("1", res)
  );
  fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
    console.log("2", res)
  );
  fetch("https://jsonplaceholder.typicode.com/posts/3").then((res) =>
    console.log("3", res)
  );
  fetch("https://jsonplaceholder.typicode.com/posts/4").then((res) =>
    console.log("4", res)
  );
}

function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(
      fetch("https://jsonplaceholder.typicode.com/posts/9")
        .then((res) => res.json())
        .then((data) => data)
        .then(
          fetch("https://jsonplaceholder.typicode.com/posts/10")
            .then((res) => res.json())
            .then((data) => data)
            .then(
              fetch("https://jsonplaceholder.typicode.com/posts/11")
                .then((res) => res.json())
                .then((data) => data)
                .then(
                  fetch("https://jsonplaceholder.typicode.com/posts/12")
                    .then((res) => res.json())
                    .then((data) => data)
                )
            )
        )
    );
}

async function getPost() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let post = await response.json();
  return post;
}

