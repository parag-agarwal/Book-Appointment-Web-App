// Write your Javascript code.
var banks = [
    {
        "name": "Marina Bay Sands",
        "address": "2 Bayfront Ave #01-30 The Shoppes at Marina Bay Sands",
        "postal_code": "Singapore 018972",
        "latitude": 1.28395,
        "longitude": 103.85885,
        "SMSQ": "8318 4336",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00am to 6.00pm <br />Sat: 10.00am to 2.30pm<br />Sundays and Public Holidays: Closed.</p><p>Counter cash services and remittances only.</p><p>Personal &amp; Corporate account opening is available online. For other corporate transactions, you may proceed to DBS MBFC Branch to be served.</p>"
    },
    {
        "name": "MBFC Branch",
        "address": "12 Marina Boulevard Level 3 MBFC Tower 3",
        "postal_code": "Singapore 018982",
        "latitude": 1.279132,
        "longitude": 103.85464,
        "SMSQ": "8318 4335",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Suntec City Branch",
        "address": "3 Temasek Boulevard #02-709/710/711 Suntec City Mall",
        "postal_code": "Singapore 038983",
        "latitude": 1.29599,
        "longitude": 103.85895,
        "SMSQ": "8318 4347",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri:10.00am to 6.00pm<br />Sat: 10.00am to 2.30pm</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "DBS Raffles Link Branch",
        "address": "1 Raffles Link, #B1-28/30 City Link Mall",
        "postal_code": "Singapore 039393",
        "latitude": 1.292009,
        "longitude": 103.8536913,
        "SMSQ": "8318 4340",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00 AM - 6.00 PM<br />Sat: 10.00 AM - 2.30 PM<br />Closed on Sundays &amp; Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Raffles Place Branch",
        "address": "22 Malacca Street #01-00 RB Capital Building",
        "postal_code": "Singapore 048980",
        "latitude": 1.2839,
        "longitude": 103.85083,
        "SMSQ": "8318 4341",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>As part of our ongoing efforts to serve you better, we are renovating DBS South Bridge Branch, located at Blk 531 Upper Cross Street, Hong Lim Complex, #01-51, Singapore 050531, from 28 April 2017 to 2 July 2017.</p><p>We seek your kind understanding as we may experience higher transaction volume at DBS Raffles Place Branch during this period. To get your queue number, SMS &lsquo;Q&rsquo; to 91842285.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Raffles Place Service Centre",
        "address": "11 Collyer Quay, #02-25, The Arcade",
        "postal_code": "Singapore 049317",
        "latitude": 1.28369,
        "longitude": 103.85236,
        "SMSQ": "8318 4342",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30am to 4.30pm <br />Sat: 8.30am to 1.00pm</p><p>All cash transactions must be made at ATMs</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "South Bridge Branch",
        "address": "Blk 531 Upper Cross Street #01-51 Hong Lim Complex",
        "postal_code": "Singapore 050531",
        "latitude": 1.28443,
        "longitude": 103.84622,
        "SMSQ": "8318 4346",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Tanjong Pagar Branch",
        "address": "Blk 1 Tanjong Pagar #01-41/44 Tanjong Pagar Plaza",
        "postal_code": "Singapore 082001",
        "latitude": 1.27573,
        "longitude": 103.84283,
        "SMSQ": "8318 4381",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Harbourfront Branch",
        "address": "1 MARITIME Square #02-122/123 Harbourfront Centre",
        "postal_code": "Singapore 099253",
        "latitude": 1.26455,
        "longitude": 103.8193,
        "SMSQ": "8318 4330",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "NUS Remix Branch",
        "address": "31 Lower Kent Ridge Road #01-02 Yusof Ishak House",
        "postal_code": "Singapore 119078",
        "latitude": 1.29825,
        "longitude": 103.77526,
        "SMSQ": "8318 4337",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>Personal Banking Services only.</p><p>All cash transactions must be made at ATM &amp; ATM+ machines. <br /> Corporate account opening is available online.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Alexandra Branch",
        "address": "460 Alexandra Road #02-33/34 Alexandra Retail Centre",
        "postal_code": "Singapore 119963",
        "latitude": 1.27367,
        "longitude": 103.80138,
        "SMSQ": "8318 4320",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Clementi Central Branch",
        "address": "Blk 449 Clementi Avenue 3 #01-243",
        "postal_code": "Singapore 120449",
        "latitude": 1.31339,
        "longitude": 103.76491,
        "SMSQ": "8318 4363",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Clementi Branch",
        "address": "Blk 450 Clementi Avenue 3 #01-293/295",
        "postal_code": "Singapore 120450",
        "latitude": 1.31358,
        "longitude": 103.76537,
        "SMSQ": "8318 4328",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Tiong Bahru Branch",
        "address": "302 Tiong Bahru Road, Tiong Bahru Plaza #01-123/124",
        "postal_code": "Singapore 168732",
        "latitude": 1.286586,
        "longitude": 103.826923,
        "SMSQ": "8318 4382",
        "operatingHours": "<p>Business Hours:<br />Mon - Sat: 11:00 AM - 7:00 PM<br />Closed on Sun and Public Holidays.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Newton Branch",
        "address": "135 Bukit Timah Road Newton Building",
        "postal_code": "Singapore 229837",
        "latitude": 1.31047,
        "longitude": 103.84354,
        "SMSQ": "8318 4373",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "ESCAPE Branch",
        "address": "2 Orchard Link #02-07/08 Scape Building",
        "postal_code": "Singapore 237978",
        "latitude": 1.301058,
        "longitude": 103.835756,
        "SMSQ": "8318 4343",
        "operatingHours": "<p>Business Hours<br />Mon - Fri 10.00 AM - 6.00PM<br />Sat: 10.00 AM - 2.30PM<br />Sundays and Public Holidays: Closed</p><p>All cash transactions must be made at our withdrawal/deposit machines.<br /> Corporate account opening and remittances is available online.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Plaza Singapura Branch",
        "address": "68 Orchard Road #B1-25 Plaza Singapura",
        "postal_code": "Singapore 238839",
        "latitude": 1.30061,
        "longitude": 103.8451,
        "SMSQ": "8318 4339",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00 AM - 6.00 PM<br />Sat: 10.00 AM - 2.30 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "CentrePoint Branch",
        "address": "176 Orchard Road #01-27 CentrePoint",
        "postal_code": "Singapore 238843",
        "latitude": 1.30145,
        "longitude": 103.8401,
        "SMSQ": "8318 4362",
        "operatingHours": "<p>Business Hours:<br />Mon - Sat: 11:00 AM - 7:00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Ngee Ann City Branch",
        "address": "391 Orchard Road #04-15 Ngee Ann City",
        "postal_code": "Singapore 238872",
        "latitude": 1.30271,
        "longitude": 103.83429,
        "SMSQ": "8318 4374",
        "operatingHours": "<p>Business Hours:<br />Mon - Sat: 11:00 AM - 7:00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Buona Vista Branch",
        "address": "Blk 43 Holland Drive #01-59",
        "postal_code": "Singapore 270043",
        "latitude": 1.30744,
        "longitude": 103.7929,
        "SMSQ": "8318 4361",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "DBS Holland V Branch",
        "address": "Raffles Holland V , 118 Holland Avenue #02-05",
        "postal_code": "Singapore 278997",
        "latitude": 1.310323,
        "longitude": 103.795686,
        "SMSQ": "8318 4331",
        "operatingHours": "<p>Business Hours:<br />Mon &ndash; Fri : 8.30am to 4.30pm<br />Sat : 8.30am to 1.00pm <br />Sundays and Public Holidays: Closed</p><p>Corporate account opening is available online. For other corporate transactions, you may proceed to POSB Buona Vista Branch to be served.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Square 2 Branch",
        "address": "10 Sinaran Drive #02-19/20 Square 2",
        "postal_code": "Singapore 307506",
        "latitude": 1.32106,
        "longitude": 103.84448,
        "SMSQ": "8318 4378",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Toa Payoh Central Branch",
        "address": "480 Toa Payoh Lorong 6 #01-09 Hdb Hub",
        "postal_code": "Singapore 310480",
        "latitude": 1.33225,
        "longitude": 103.84854,
        "SMSQ": "8318 4383",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Toa Payoh Branch",
        "address": "520 Toa Payoh Lorong 6 #02-50 Hdb Hub",
        "postal_code": "Singapore 310520",
        "latitude": 1.33319,
        "longitude": 103.84751,
        "SMSQ": "8318 4352",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Towner Road Branch",
        "address": "Blk 101 Towner Road #01-238/240/242",
        "postal_code": "Singapore 322101",
        "latitude": 1.31996,
        "longitude": 103.86139,
        "SMSQ": "8318 4353",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Aperia Branch",
        "address": "12 Kallang Avenue, #01-24",
        "postal_code": "Singapore 339511",
        "latitude": 1.309891,
        "longitude": 103.864342,
        "SMSQ": "8318 4323",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM<br /><br />Closed on Sun and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Paya Lebar Branch",
        "address": "10 Eunos Road 8, Singapore Post Centre, #01-106/107/108",
        "postal_code": "Singapore 408600",
        "latitude": 1.319291,
        "longitude": 103.8926303,
        "SMSQ": "8318 4397",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri : 8.30am - 4.30pm<br />Sat : 8.30am - 1.00pm<br />Closed on Sun and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Marine Parade Branch",
        "address": "Blk 83 Marine Parade #01-584/586",
        "postal_code": "Singapore 440083",
        "latitude": 1.30285,
        "longitude": 103.90578,
        "SMSQ": "8318 4371",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Parkway Parade Branch",
        "address": "80 Marine Parade Road #01-12 Parkway Parade",
        "postal_code": "Singapore 449269",
        "latitude": 1.30195,
        "longitude": 103.90505,
        "SMSQ": "8318 4338",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00 AM to 6.00 PM<br />Sat: 10.00 AM to 2.30 PM<br />Close on Sundays and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Bedok Branch",
        "address": "Blk 210 New Upper Changi Road #01-707",
        "postal_code": "Singapore 460210",
        "latitude": 1.32467,
        "longitude": 103.93212,
        "SMSQ": "8318 4324",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Bedok Central Branch",
        "address": "Blk 213  Bedok North Street 1 #01-103",
        "postal_code": "Singapore 460213",
        "latitude": 1.3263,
        "longitude": 103.93276,
        "SMSQ": "8318 4358",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br /> Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "SUTD Branch",
        "address": "8 Somapah Road #01-103",
        "postal_code": "Singapore 487372",
        "latitude": 1.340822,
        "longitude": 103.963196,
        "SMSQ": "8318 4348",
        "operatingHours": "<p>Business Hours<br />Mon - Fri 8.30AM - 4.30PM <br />Sat: 8.30AM - 1.00PM<br />Sundays and Public Holidays: Closed.</p><p>All cash transactions must be made at ATM &amp; ATM+ machines. <br /> Personal and Corporate account opening is available online.</p>"
    },
    {
        "name": "Pasir Ris East Branch",
        "address": "Block 442 Pasir Ris Drive 6 #01-32/34",
        "postal_code": "Singapore 510442",
        "latitude": 1.36892,
        "longitude": 103.95797,
        "SMSQ": "8318 4375",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "White Sands Branch",
        "address": "1 Pasir Ris Central Street 3 #03-05",
        "postal_code": "Singapore 518457",
        "latitude": 1.37257,
        "longitude": 103.95016,
        "SMSQ": "8318 4385",
        "operatingHours": "<p>Business Hours:<br />Mon &ndash; Sat: 11:00 AM - 7:00 PM<br />Closed on Sun and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Tampines Central Branch",
        "address": "Blk 513 Tampines Central #01-160",
        "postal_code": "Singapore 520513",
        "latitude": 1.35373,
        "longitude": 103.94436,
        "SMSQ": "8318 4379",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Tampines East Branch",
        "address": "Blk 201A Tampines Street 21 #01-1051",
        "postal_code": "Singapore 521201",
        "latitude": 1.35322,
        "longitude": 103.95259,
        "SMSQ": "8318 4380",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Eastpoint Branch",
        "address": "3 Simei Street 6 #01-24/25/29 Eastpoint Mall",
        "postal_code": "Singapore 528833",
        "latitude": 1.34281,
        "longitude": 103.95297,
        "SMSQ": "8318 4365",
        "operatingHours": "Business Hours:<br />Mon - Sat: 11am-7pm <br />Sundays and Public Holidays: Closed<p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Tampines One Branch",
        "address": "Tampines 1 - 10 TAMPINES CENTRAL 1 #03-08/09",
        "postal_code": "Singapore 529536",
        "latitude": 1.35426,
        "longitude": 103.945028,
        "SMSQ": "8318 4350",
        "operatingHours": "Business Hours:<br />Mon - Fri: 10.00am to 6.00pm<br />Sat: 10.00am to 2.30pm<p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Hougang Branch",
        "address": "Blk 204 Hougang Street 21 #01-107/111",
        "postal_code": "Singapore 530204",
        "latitude": 1.35885,
        "longitude": 103.88492,
        "SMSQ": "8318 4332",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Heartland Mall Branch",
        "address": "Blk 205 Hougang Street 21 #03-00 Heartland Mall",
        "postal_code": "Singapore 530205",
        "latitude": 1.35934,
        "longitude": 103.88521,
        "SMSQ": "8318 4366",
        "operatingHours": "<p>Business Hours:<br />Mon - Sat: 11:00 AM - 7:00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Hougang Central Branch",
        "address": "Blk 805 Hougang Central #01-102/104",
        "postal_code": "Singapore 530805",
        "latitude": 1.37052,
        "longitude": 103.89425,
        "SMSQ": "8318 4367",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Compass One Branch",
        "address": "1 Sengkang Square #02-05/06 Compass One Mall",
        "postal_code": "Singapore 545078",
        "latitude": 1.39227,
        "longitude": 103.89477,
        "SMSQ": "8318 4364",
        "operatingHours": "Business Hours:<br />Mon - Sat: 11.00 AM - 7.00 PM<br />Sundays and Public Holidays: Closed<br /><br /><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Serangoon Central Branch",
        "address": "Blk 254 Serangoon Central Drive #01-203",
        "postal_code": "Singapore 550254",
        "latitude": 1.35463,
        "longitude": 103.87099,
        "SMSQ": "8318 4377",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Serangoon Garden Branch",
        "address": "1 Maju Avenue #01-12/13/14/15 Serangoon Garden Village",
        "postal_code": "Singapore 556679",
        "latitude": 1.36522,
        "longitude": 103.86526,
        "SMSQ": "8318 4345",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Ang Mo Kio Central Branch",
        "address": "Blk 712a Ang Mo Kio Avenue 6 #01-4066",
        "postal_code": "Singapore 560712",
        "latitude": 1.37143,
        "longitude": 103.8471,
        "SMSQ": "8318 4357",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>POSB Ang Mo Kio Central Branch will be closed for renovation on 22 April 2018 (Sunday) and re-open on 2 July 2018 (Monday). Our last day of operation is on 21 April 2018 (Saturday).</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "ITE College Central Branch",
        "address": "2 Ang Mo Kio Drive Blk A #01-10",
        "postal_code": "Singapore 567720",
        "latitude": 1.37775,
        "longitude": 103.85536,
        "SMSQ": "8318 4391",
        "operatingHours": "Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed<br /><br />Cash transaction at this branch is capped at S$20,000 per customer for personal account holder only.&nbsp; Denominations are S$10, S$50, S$100 and S$1,000, subject to availability.<br />No Coin Services.<p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Ang Mo Kio - Basement 1",
        "address": "53 Ang Mo Kio Avenue 3 #B1-01 AMK Hub",
        "postal_code": "Singapore 569933",
        "latitude": 1.36902,
        "longitude": 103.84812,
        "SMSQ": "8318 4321",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00 AM - 6.00 PM<br />Sat: 10.00 AM - 2.30 PM<br /><br />All Account Opening &amp; Investment only. <br />Cash services available at AMK Hub #03-01/27.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Ang Mo Kio Branch (Main)",
        "address": "53 Ang Mo Kio Avenue 3 #03-01/27 AMK Hub",
        "postal_code": "Singapore 569933",
        "latitude": 1.36902,
        "longitude": 103.84812,
        "SMSQ": "8318 4322",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00 AM - 6.00 PM<br />Sat: 10.00 AM - 2.30 PM<br /><br />All Cash &amp; Remittance transactions only.<br />Account opening &amp; Investment available at AMK Hub #B1-01.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Thomson Branch",
        "address": "301 Upper Thomson Road #01-45 Thomson Plaza",
        "postal_code": "Singapore 574408",
        "latitude": 1.35464,
        "longitude": 103.83093,
        "SMSQ": "8318 4351",
        "operatingHours": "<p>Business Hours:<br />Mon &ndash; Fri : 10.00AM to 6.00PM<br />Sat: 10.00AM to 2.30PM<br />Closed on Sunday and Public holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Bishan Branch",
        "address": "9 Bishan Place #01-14 Junction 8 Shopping Centre",
        "postal_code": "Singapore 579837",
        "latitude": 1.34997,
        "longitude": 103.84879,
        "SMSQ": "8318 4325",
        "operatingHours": "<p>Business Hours:<br />Mon &ndash; Fri : 10.00am to 6.00pm<br /> Sat : 10.00am to 2.30pm<br /> Closed on Sundays and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Bukit Timah Branch",
        "address": "1 Jalan Anak Bukit #01-19/20 Bukit Timah Plaza",
        "postal_code": "Singapore 588996",
        "latitude": 1.3383374,
        "longitude": 103.7785228,
        "SMSQ": "8318 4326",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Westgate Branch",
        "address": "3 Gateway Drive #04-36 Westgate",
        "postal_code": "Singapore 608532",
        "latitude": 1.3321,
        "longitude": 103.74072,
        "SMSQ": "8318 4354",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 10.00 AM - 6.00 PM<br />Sat: 10.00 AM - 2.30 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Jurong East Central Branch",
        "address": "21 Jurong Gateway Road #01-03 CPF Jurong Building",
        "postal_code": "Singapore 608546",
        "latitude": 1.335,
        "longitude": 103.73978,
        "SMSQ": "8318 4368",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Jurong West Branch",
        "address": "Blk 501 Jurong West Street 51 #01-279/281",
        "postal_code": "Singapore 640501",
        "latitude": 1.35056,
        "longitude": 103.71907,
        "SMSQ": "8318 4370",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Nanyang Estate Branch",
        "address": "Blk 960 Jurong West Street 92 #01-174",
        "postal_code": "Singapore 640960",
        "latitude": 1.3415,
        "longitude": 103.69129,
        "SMSQ": "8318 4372",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Jurong Point Branch",
        "address": "63 Jurong West Central 3 #B1-47/48/49/50 Jurong Point Shopping Centre",
        "postal_code": "Singapore 648331",
        "latitude": 1.33942,
        "longitude": 103.70536,
        "SMSQ": "8318 4334",
        "operatingHours": "<p>Business Hours:<br />Mon to Fri: 10.00am to 6.00pm<br />Sat : 10.00am to 2.30pm</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Jurong Point Branch",
        "address": "1 Jurong West Central 2 #B1-20 Jurong Point Shopping Centre",
        "postal_code": "Singapore 648886",
        "latitude": 1.33934,
        "longitude": 103.70539,
        "SMSQ": "8318 4369",
        "operatingHours": "<p>Business Hours:<br />Mon - Sat: 11.00 AM to 7.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Bukit Batok Central Branch",
        "address": "Blk 636 Bukit Batok Central #01-02/04",
        "postal_code": "Singapore 650636",
        "latitude": 1.34971,
        "longitude": 103.7518,
        "SMSQ": "8318 4359",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Bukit Panjang Branch",
        "address": "Blk 260 Bangkit Road #01-15",
        "postal_code": "Singapore 670260",
        "latitude": 1.3777,
        "longitude": 103.77409,
        "SMSQ": "8318 4360",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Choa Chu Kang Branch",
        "address": "Blk 304 Choa Chu Kang Avenue 4 #01-657/659",
        "postal_code": "Singapore 680304",
        "latitude": 1.38426,
        "longitude": 103.7431,
        "SMSQ": "8318 4327",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8.30 AM - 4.30 PM<br />Sat: 8.30 AM - 1.00 PM</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Yew Tee Branch",
        "address": "61 Choa Chu Kang Drive #01-04 Yew Tee MRT Station",
        "postal_code": "Singapore 689715",
        "latitude": 1.39731,
        "longitude": 103.74739,
        "SMSQ": "8318 4388",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Woodlands West Branch",
        "address": "Blk 303 Woodlands Street 31 #01-191",
        "postal_code": "Singapore 730303",
        "latitude": 1.43114,
        "longitude": 103.77411,
        "SMSQ": "8318 4386",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Kampung Admiralty Branch",
        "address": "Block 676 Woodlands Drive 71, Kampung Admiralty, #B1-01",
        "postal_code": "Singapore 730676",
        "latitude": 1.4401365,
        "longitude": 103.798413,
        "SMSQ": "8318 4387",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri : 10.00am - 6.00pm<br />Sat : 10.00am - 2.30pm<br />Closed on Sun and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Woodlands Branch",
        "address": "900 South Woodlands Drive #02-01 Woodlands Civic Centre",
        "postal_code": "Singapore 730900",
        "latitude": 1.43515,
        "longitude": 103.78719,
        "SMSQ": "8318 4355",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri : 10.00am - 6.00pm<br />Sat : 10.00am - 2.30pm</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Woodlands Service Centre",
        "address": "1 Woodlands Square, #B1-26 Causeway Point",
        "postal_code": "Singapore 738099",
        "latitude": 1.43586,
        "longitude": 103.78622,
        "SMSQ": "8318 4356",
        "operatingHours": "Business Hours:<br />Mon - Fri : 10.00am - 6.00pm<br />Sat : 10.00am - 2.30pm <br /><br />Financial advisory : <br />Mon to Sat : 10.00am -8.00pm <br /><br />Closed on Sun and Public Holidays. We do not support cash and account opening.<p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Yishun West Branch",
        "address": "Blk 101 Yishun Avenue 5 #01-05",
        "postal_code": "Singapore 760101",
        "latitude": 1.43058,
        "longitude": 103.82776,
        "SMSQ": "8318 4390",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Yishun North Branch",
        "address": "Blk 290 Yishun Street 22 #01-401",
        "postal_code": "Singapore 760290",
        "latitude": 1.43611,
        "longitude": 103.83613,
        "SMSQ": "8318 4398",
        "operatingHours": "<p>Business Hours:<br />Mon &ndash; Fri: 8.30am to 4.30pm<br />Sat: 8.30am &ndash; 1.00pm<br /> Sundays and Public Holidays: Closed<br /><br />Enjoy round-the-clock branch banking services with our Video Teller Machine (VTM).<br />All cash transactions must be made at ATM and CAM.</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Yishun Central Branch",
        "address": "Blk 926 Yishun Central 1 #01-183",
        "postal_code": "Singapore 760926",
        "latitude": 1.42805,
        "longitude": 103.83767,
        "SMSQ": "8318 4389",
        "operatingHours": "<p>Business Hours:<br />Mon - Fri: 8:30 AM - 4:30 PM<br />Sat: 8.30 AM - 1.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Seletar Mall Branch",
        "address": "33 Sengkang West Avenue #01-49/50/51/52/53 Seletar Mall",
        "postal_code": "Singapore 797653",
        "latitude": 1.39108,
        "longitude": 103.87635,
        "SMSQ": "8318 4376",
        "operatingHours": "<p>Business Hours:<br />Mon &ndash; Sat: 11.00 AM to 7.00 PM<br />Sundays and Public Holidays: Closed</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    },
    {
        "name": "Waterway Point Branch",
        "address": "83 Punggol Central #01-15",
        "postal_code": "Singapore 828761",
        "latitude": 1.405353,
        "longitude": 103.901743,
        "SMSQ": "8318 4384",
        "operatingHours": "<p>Business Hours:<br />Mon - Sat: 11.00 AM - 7.00 PM <br />Closed on Sundays and Public Holidays</p><p>The issuance of queue numbers may end earlier if there are more customers than we can serve.</p>"
    }
];
