// file: fetch-users.mjs
// Must be run with "type": "module" or .mjs extension
const userIds = [1, 2, 3, 4];

// Async function to fetch user data
async function fetchUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch user ${id}`);
    return res.json();
}

// Sequential loop (awaits one at a time)
for (const id of userIds) {
    const user = await fetchUser(id);
    console.log(`[SEQUENTIAL] ${user.name}`);
}

// Parallel version with Promise.all
const userPromises = userIds.map(id => fetchUser(id));
const users = await Promise.all(userPromises);

for (const user of users) {
    console.log(`[PARALLEL] ${user.name}`);
}