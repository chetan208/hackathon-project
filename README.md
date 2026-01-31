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



# Page for token genration 

    --------------------------------------------------
    | LOGO | Generate Token        Back | Profile    |
    --------------------------------------------------

    --------------------------------------------------
    |  HOSPITAL NAME                                |
    |  Department: OPD                              |
    |------------------------------------------------|
    |  Hospital Address                             |
    |  Today’s Date                                 |
    --------------------------------------------------

    --------------------------------------------------
    |  SELECT DETAILS                               |
    |------------------------------------------------|
    |  Patient Name      : [ _____________ ]        |
    |  Age               : [ ___ ]                  |
    |  Mobile Number     : [ _____________ ]        |
    |                                                |
    |  Visit Type:                                  |
    |  (•) New Patient   ( ) Follow-up              |
    --------------------------------------------------

    --------------------------------------------------
    |  QUEUE INFORMATION (REAL-TIME)                |
    |------------------------------------------------|
    |  Current Token Serving : A-21                 |
    |  Total Patients Ahead  : 5                    |
    |  Estimated Wait Time   : 12 mins              |
    --------------------------------------------------

    --------------------------------------------------
    |  IMPORTANT NOTICE                             |
    |------------------------------------------------|
    |  • Token valid only for today                 |
    |  • Please arrive before your turn             |
    --------------------------------------------------

    --------------------------------------------------
    |  ACTION                                       |
    |------------------------------------------------|
    |  [ Generate Token ]                           |
    --------------------------------------------------


# page when user is redirected after generationg token

    --------------------------------------------------
    | LOGO | My Token Status            Home | Login |
    --------------------------------------------------

    --------------------------------------------------
    |  TOKEN CONFIRMED ✅                           |
    |------------------------------------------------|
    |  Token Number     : A-26                      |
    |  Department       : OPD                       |
    |  Hospital         : Hospital Name             |
    |  Date & Time      : Today, 10:42 AM           |
    --------------------------------------------------

    --------------------------------------------------
    |  ⚠ SAVE YOUR RECORDS                          |
    |------------------------------------------------|
    |  You are using guest access                  |
    |  Register to save your token history,        |
    |  medical visits & faster future booking      |
    |                                                |
    |  [ Register Now ]   [ Login ]                 |
    --------------------------------------------------

    --------------------------------------------------
    |  LIVE QUEUE STATUS                            |
    |------------------------------------------------|
    |  Now Serving Token   : A-23                   |
    |  Your Position       : 3rd in queue           |
    |  Estimated Wait      : 8 mins                 |
    --------------------------------------------------

    --------------------------------------------------
    |  QUEUE PROGRESS                               |
    |------------------------------------------------|
    |  [██████████░░░░░░░░]  70% completed          |
    |  (Queue updates automatically)               |
    --------------------------------------------------

    --------------------------------------------------
    |  REAL-TIME UPDATES                            |
    |------------------------------------------------|
    |  • Please stay near the hospital              |
    |  • Notification will be sent on your turn    |
    |  • Delay alerts will be shown here            |
    --------------------------------------------------

    --------------------------------------------------
    |  PATIENT DETAILS (TEMPORARY)                  |
    |------------------------------------------------|
    |  Name          : Guest User                   |
    |  Mobile Number : ********45                  |
    |  Status        : Guest (Not Saved)            |
    --------------------------------------------------

    --------------------------------------------------
    |  ACTIONS                                      |
    |------------------------------------------------|
    |  [ Refresh Status ]   [ Cancel Token ]        |
    --------------------------------------------------

    --------------------------------------------------
    |  WHY REGISTER?                                |
    |------------------------------------------------|
    |  ✔ View previous tokens                      |
    |  ✔ Faster token generation next time         |
    |  ✔ Medical visit history                     |
    --------------------------------------------------

    --------------------------------------------------
    |  HOSPITAL INFO                                |
    |------------------------------------------------|
    |  Timings   : 9:00 AM – 8:00 PM                |
    |  Help Desk : 1800-XXX-XXX                     |
    --------------------------------------------------


## page for the super admin

    --------------------------------------------------
    | LOGO | Hospital Admin Panel        Logout     |
    --------------------------------------------------

    --------------------------------------------------
    | SIDEBAR                                       |
    |------------------------------------------------|
    | ▶ Dashboard                                   |
    | ▶ Departments                                 |
    | ▶ All Queues                                  |
    | ▶ Tokens & Rules                              |
    | ▶ Staff Management                            |
    | ▶ Reports & Analytics                         |
    | ▶ Emergency Control                           |
    --------------------------------------------------

    --------------------------------------------------
    | DASHBOARD (MAIN CONTENT)                      |
    |------------------------------------------------|
    | Total Patients Today     : 142                |
    | Total Tokens Generated   : 160                |
    | Active Departments       : 6                  |
    | Avg Waiting Time         : 15 mins             |
    --------------------------------------------------

    --------------------------------------------------
    | LIVE HOSPITAL QUEUE STATUS                    |
    |------------------------------------------------|
    | Dept Name     Now Serving   Waiting            |
    | --------------------------------------------- |
    | OPD           A-21           18                |
    | Cardiology    C-09           7                 |
    | Pediatrics    P-04           4                 |
    --------------------------------------------------

    --------------------------------------------------
    | QUICK ACTIONS                                 |
    |------------------------------------------------|
    | [ Add Department ]   [ Assign Admin ]          |
    | [ Set Token Rules ]  [ Emergency Mode ]        |
    --------------------------------------------------

    --------------------------------------------------
    | ALERTS / SYSTEM MESSAGES                      |
    |------------------------------------------------|
    | • High rush detected in OPD                   |
    | • Emergency token issued                     |
    --------------------------------------------------




## PAGE  for the department admin

    --------------------------------------------------
    | LOGO | Department Admin (OPD)      Logout     |
    --------------------------------------------------

    --------------------------------------------------
    | SIDEBAR                                       |
    |------------------------------------------------|
    | ▶ Dashboard                                   |
    | ▶ Live Queue                                  |
    | ▶ Token List                                  |
    | ▶ Doctor Availability                         |
    | ▶ Reports                                     |
    --------------------------------------------------

    --------------------------------------------------
    | DEPARTMENT DASHBOARD                          |
    |------------------------------------------------|
    | Department        : OPD                       |
    | Now Serving Token : A-21                      |
    | Patients Waiting  : 12                        |
    | Avg Waiting Time  : 14 mins                   |
    --------------------------------------------------

    --------------------------------------------------
    | LIVE QUEUE CONTROL                            |
    |------------------------------------------------|
    | Token   Patient Name   Status                 |
    | -------------------------------------------- |
    | A-21    Ramesh         Serving                |
    | A-22    Suresh         Waiting                |
    | A-23    Ankit          Waiting                |
    --------------------------------------------------

    --------------------------------------------------
    | QUEUE ACTION BUTTONS                          |
    |------------------------------------------------|
    | [ Next Token ]   [ Skip ]   [ Hold ]           |
    | [ Priority Token ]                            |
    --------------------------------------------------

    --------------------------------------------------
    | NOTIFICATIONS / ANNOUNCEMENT                  |
    |------------------------------------------------|
    | Message to users:                             |
    | [ Queue delayed by 10 minutes ]               |
    --------------------------------------------------
