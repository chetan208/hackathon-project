## initialize a react app

    npm create vite@latest

    cleanup by default things
    app.jsx app.js index.css reactstrictMode maybe

## configure tailwind css

    https://tailwindcss.com/docs/installation/using-vite

    npm install tailwindcss @tailwindcss/vite




# Pages we need 

## Home page 

        --------------------------------------------------
        | LOGO | App Name            Login | Register    |
        --------------------------------------------------

        --------------------------------------------------
        |                                                |
        |  FIND HOSPITALS & MANAGE QUEUES SMARTLY        |
        |  One platform for all hospitals                |
        |                                                |
        |  [ Search Hospital / City / Pincode ______ ]  |
        |  [ Find Hospital ]                             |
        |                                                |
        --------------------------------------------------

        --------------------------------------------------
        |  WHAT DOES THIS PLATFORM DO?                   |
        |------------------------------------------------|
        |  ✔ Search nearby hospitals                     |
        |  ✔ Get digital queue token                     |
        |  ✔ Check live queue status                     |
        |  ✔ Book appointments online                   |
        |  ✔ Reduce waiting time in hospitals            |
        --------------------------------------------------

        --------------------------------------------------
        |  MAIN SERVICES                                 |
        |------------------------------------------------|
        |  [ Search Hospitals ]   [ Get Queue Token ]    |
        |  [ Check Queue ]        [ Book Appointment ]   |
        |  [ Emergency ]          [ Hospital Login ]     |
        --------------------------------------------------

        --------------------------------------------------
        |  HOW IT WORKS                                  |
        |------------------------------------------------|
        |  1. Search hospital                            |
        |  2. Select department                          |
        |  3. Get digital token                          |
        |  4. Track queue live                           |
        --------------------------------------------------

        --------------------------------------------------
        |  POPULAR / NEARBY HOSPITALS                    |
        |------------------------------------------------|
        |  Hospital Name      City      [ View ]         |
        |  Hospital Name      City      [ View ]         |
        |  Hospital Name      City      [ View ]         |
        --------------------------------------------------

        --------------------------------------------------
        |  FOR HOSPITALS                                 |
        |------------------------------------------------|
        |  Are you a hospital?                           |
        |  [ Register Your Hospital ]                    |
        |  Manage queues digitally                       |
        --------------------------------------------------

        --------------------------------------------------
        |  FOOTER                                        |
        |------------------------------------------------|
        |  About | Contact | Privacy | Terms             |
        |  © Smart Hospital Platform - Hackathon         |
        --------------------------------------------------


# page after user click find hospital

    --------------------------------------------------
    | LOGO | Find Hospital        Login | Profile    |
    --------------------------------------------------

    --------------------------------------------------
    |  SEARCH HOSPITALS                              |
    |------------------------------------------------|
    |  Hospital Name / City / Pincode                |
    |  [ ____________________________ ]              |
    |                                                |
    |  Filters:                                      |
    |  [ Department ▼ ] [ Distance ▼ ] [ Open Now ]  |
    |                                                |
    |  [ Search ]    [ Reset ]                       |
    --------------------------------------------------

    --------------------------------------------------
    |  SEARCH RESULTS                                |
    |------------------------------------------------|
    |                                                |
    |  --------------------------------------------  |
    |  | Hospital Name                              | |
    |  | City | Distance: 2.3 km                    | |
    |  | Departments: OPD, Ortho, Cardio            | |
    |  | Current Queue: 18 patients                 | |
    |  | Est. Wait Time: 20 mins                    | |
    |  | [ View Details ]  [ Get Token ]            | |
    |  --------------------------------------------  |
    |                                                |
    |  --------------------------------------------  |
    |  | Hospital Name                              | |
    |  | City | Distance: 4.1 km                    | |
    |  | Departments: Pediatrics, OPD               | |
    |  | Current Queue: 9 patients                  | |
    |  | Est. Wait Time: 10 mins                    | |
    |  | [ View Details ]  [ Get Token ]            | |
    |  --------------------------------------------  |
    --------------------------------------------------

    --------------------------------------------------
    |  MAP VIEW (OPTIONAL - BONUS)                   |
    |------------------------------------------------|
    |  Show hospitals on map                         |
    |  Toggle: [ List View | Map View ]              |
    --------------------------------------------------

    --------------------------------------------------
    |  PAGINATION / LOAD MORE                        |
    |------------------------------------------------|
    |  [ Previous ]   Page 1 of 5   [ Next ]         |
    --------------------------------------------------

    --------------------------------------------------
    |  FOOTER                                        |
    |------------------------------------------------|
    |  About | Contact | Privacy                     |
    --------------------------------------------------


# page for the particlular hospital 

    --------------------------------------------------
    | LOGO | Hospital Details     Back | Profile     |
    --------------------------------------------------

    --------------------------------------------------
    |  HOSPITAL INFORMATION                          |
    |------------------------------------------------|
    |  Hospital Name                                 |
    |  City, Address                                 |
    |  Contact Number | Email                        |
    |  Timings: 9:00 AM – 8:00 PM                    |
    |  Type: Government / Private                    |
    |                                                |
    |  [ Get Token ]   [ Book Appointment ]          |
    --------------------------------------------------

    --------------------------------------------------
    |  LIVE QUEUE OVERVIEW                           |
    |------------------------------------------------|
    |  Total Patients Waiting : 26                   |
    |  Now Serving Token     : A-12                  |
    |  Average Wait Time     : 18 mins               |
    --------------------------------------------------

    --------------------------------------------------
    |  DEPARTMENTS AVAILABLE                         |
    |------------------------------------------------|
    |                                                |
    |  --------------------------------------------  |
    |  | OPD                                       | |
    |  | Current Queue : 10                         | |
    |  | Est. Wait Time: 15 mins                    | |
    |  | [ View Queue ]   [ Get Token ]             | |
    |  --------------------------------------------  |
    |                                                |
    |  --------------------------------------------  |
    |  | Cardiology                                | |
    |  | Current Queue : 6                          | |
    |  | Est. Wait Time: 20 mins                    | |
    |  | [ View Queue ]   [ Get Token ]             | |
    |  --------------------------------------------  |
    |                                                |
    |  --------------------------------------------  |
    |  | Pediatrics                                | |
    |  | Current Queue : 4                          | |
    |  | Est. Wait Time: 8 mins                     | |
    |  | [ View Queue ]   [ Get Token ]             | |
    |  --------------------------------------------  |
    --------------------------------------------------

    --------------------------------------------------
    |  DOCTORS (OPTIONAL SECTION)                    |
    |------------------------------------------------|
    |  Doctor Name – Department                     |
    |  Available: Yes / No                          |
    --------------------------------------------------

    --------------------------------------------------
    |  HOSPITAL POLICIES / NOTES                    |
    |------------------------------------------------|
    |  • Emergency cases get priority                |
    |  • Online token valid for today only           |
    --------------------------------------------------

    --------------------------------------------------
    |  FOOTER                                        |
    |------------------------------------------------|
    |  About | Contact | Help                        |
    --------------------------------------------------




