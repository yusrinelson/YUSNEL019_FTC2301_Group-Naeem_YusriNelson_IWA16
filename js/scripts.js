// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const data = {
    response: {
        requestType: "FETCH_ATHLETE_DATA",
        requestBy: "ALL_MATCHING_ATHLETES",
        forDisplay: "BEST_RACES",

        data: {
            NM372: {
                firstName: "Nwabisa",
                surname: "Masiko",
                id: "NM372",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [9, 7, 8, 6],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [6, 7, 8, 7],
                    },
                ],
            },

            SV782: {
                firstName: "Schalk",
                surname: "Venter",
                id: "SV782",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [10, 8, 3, 12],
                    },
                    {
                        date: '2022-11-25T20:00:00.000Z',
                        time: [6, 8, 9, 11],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [10, 11, 4, 8],
                    },
                    {
                        date: '2022-12-09T20:00:00.000Z',
                        time: [9, 8, 9, 11],
                    },
                ],
            },
        },
    },
};

// Only edit below this comment

const createHtml = (athlete) => {
    const { firstName, surname, id, races } = data.response.data[athlete]
    const [NewRace] = races.reverse()   //created NewRace 
    const { date, time } = NewRace


    const fragment = document.createDocumentFragment();

    const title = document.createElement("h2"); //changed h2 to string
    title.textContent = `${id}`;
    fragment.appendChild(title);

    const list = document.createElement("dl");
    
    let day = new Date(date);               //used new Date() to get the date
    let month = MONTHS[day.getMonth()];
    let year = day.getFullYear();
      day = day.toLocaleString('en-US', { month: 'short', day: 'numeric' }) // used toLocaleString to edit the date format

    const [ first, second, third, fourth ] = time;  
    const total = first + second + third + fourth;

    const hours = Math.floor(total / 60);           //used Math.floor to round to whole number
    const minutes = Math.floor(total+hours);        //added total to hours to get latest time

    //created interpolations 
     //length property to count the number of races
     // fixed layout 
    list.innerHTML = /* html */ `    
      <dt>Athlete: ${firstName} ${surname}</dt>

      <dt>Total Races: ${races.length}</dt>
  
      <dt>Event Date (Latest): ${day} ${month} ${year}</dt>
  
      <dt>Total Time (Latest): ${hours.toString().padStart(2, 0)}: ${minutes.toString().padStart(2, 0)}</dt>
    `;

    fragment.appendChild(list);
    return fragment
}
const NM372 = document.querySelector("[data-athlete= 'NM372']").appendChild(createHtml('NM372'));
const SV782 = document.querySelector("[data-athlete= 'SV782'] ").appendChild(createHtml('SV782'));