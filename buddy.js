const buddys = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => getBuddys(data))
}
buddys();
const getBuddys = (data) => {
    const buddys = data.results;
    const buddysContainer = document.getElementById('buddys');

    for (const buddy of buddys) {
        const p = document.createElement('p');
        const names = document.createElement('p');
        p.innerText = buddy.email;
        buddysContainer.appendChild(p);
        const fullName = `Full Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        names.innerText = fullName;
        buddysContainer.appendChild(names)


        console.log(fullName);
    }
    // console.log(data.results);
}