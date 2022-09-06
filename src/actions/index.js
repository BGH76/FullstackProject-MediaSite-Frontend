import axios from 'axios';

axios.create({
    baseURL: 'localhost://8080'
});
// Test data
        const data = [
            {
                name : "Brian Houts",
                date : "8/31/2022",
                post : "Making my first post",
                comments : {
                    comment1 : "comment 1",
                    comment2 : "comment 2"
                }
            },
            {
                name : "Tucker",
                date : "8/30/2022",
                post : "Tucker made his first post",
                comments : {
                    comment1 : "comment 1",
                    comment2 : "comment 2"
                }
            },
            {
                name : "Buddy",
                date : "8/29/2022",
                post : "Just a post for test data",
                comments : {
                    comment1 : "comment 1",
                    comment2 : "comment 2"
                }
            }
    
        ];

async function httpLogin (username, password) {
    const result = await axios.post('http://localhost:8080/login',
            {
                userName : username,
                password : password
            });
    return result.data;
}

const httpCreateAccount = (fn, ln, em, un, pw) => {
    // Send to backend
    console.log(`First name ${fn}`);
    console.log(`Last name ${ln}`);
    console.log(`Email ${em}`);
    console.log(`Username ${un}`);
    console.log(`Password ${pw}`);
}

async function httpGetContent (user_id) {
    
    await axios.get(`http://localhost:8080/user/friends_post/${user_id}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error)
    })
}
export {
    httpGetContent,
    httpLogin
}