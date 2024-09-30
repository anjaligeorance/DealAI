
const locationData = {
    USA: {
        states: {
            California: ["Los Angeles", "San Francisco", "San Diego"],
            Texas: ["Houston", "Dallas", "Austin"],
        },
    },
    India: {
        states: {
            Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
            Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        },
    },
    UK: {
        states: {
            England: ["London", "Manchester", "Birmingham"],
            Scotland: ["Edinburgh", "Glasgow"],
        },
    },
    Australia: {
        states: {
            New_South_Wales: ["Sydney", "Newcastle"],
            Victoria: ["Melbourne", "Geelong"],
        },
    },
    Canada: {
        states: {
            Ontario: ["Toronto", "Ottawa"],
            Quebec: ["Montreal", "Quebec City"],
        },
    },
};


const showroomNames = [
    "Nesto", "Lulu Hypermarket", "Forum Mall", "mG Future", 
    "Lulu Connect", "Smartpoint", "Kalyan Silks", "Kalyan Sarees"
];


const imageFiles = [
    "d1.jpg", "d2.jpeg", "d3.jpg", "d4.jpg", 
    "d5.jpeg", "d6.jpg", "d7.jpg", "d8.webp"
];


function updateStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    
    
    stateSelect.innerHTML = '<option value="">Select a state</option>';
    districtSelect.innerHTML = '<option value="">Select a district</option>';

    const selectedCountry = countrySelect.value;

    if (selectedCountry) {
        const states = Object.keys(locationData[selectedCountry].states);
        states.forEach((state) => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
}


function updateDistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    

    districtSelect.innerHTML = '<option value="">Select a district</option>';

    const selectedState = stateSelect.value;
    const selectedCountry = document.getElementById("country").value;

    if (selectedState) {
        const districts = locationData[selectedCountry].states[selectedState];
        districts.forEach((district) => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}


document.getElementById("location-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");


    if (countrySelect.value && stateSelect.value && districtSelect.value) {
        const dealsContainer = document.getElementById("deals-container");
        dealsContainer.innerHTML = ""; 

        for (let i = 0; i < 8; i++) {
            const dealBox = document.createElement("div");
            dealBox.className = "deal-box";
            
            
            const randomImageIndex = Math.floor(Math.random() * imageFiles.length);
            const img = document.createElement("img");
            img.src = `photos/${imageFiles[randomImageIndex]}`; 
            img.alt = `Deal ${i + 1}`;
            dealBox.appendChild(img);
            
            const expires = document.createElement("div");
            expires.className = "expires";
            expires.textContent = `Expires in ${Math.floor(Math.random() * 24) + 1} hours`;
            dealBox.appendChild(expires);
            
            
            const showroomIndex = Math.floor(Math.random() * showroomNames.length);
            const showroomName = showroomNames[showroomIndex];
            const showroomDiv = document.createElement("div");
            showroomDiv.className = "showroom-name";
            showroomDiv.textContent = showroomName; 
            dealBox.appendChild(showroomDiv);
            
            dealsContainer.appendChild(dealBox);
        }
    } else {
        alert("Please select a country, state, and district before submitting.");
    }
});
