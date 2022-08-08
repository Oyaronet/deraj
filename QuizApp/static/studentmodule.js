const STUDENT_LINK = document.getElementById('student-func');
STUDENT_LINK.addEventListener('click', studentFunctionality)

let displayContainer = document.getElementById('display-container');
let displayArea = document.getElementById('display-area')


// Function to add student functionality //
function studentFunctionality() {
    // clear all the content in the display container before insert new functionality
    if (displayArea) {
        displayContainer.removeChild(displayArea)
    }

    // student tabs
    const STUDENT_TABS = `
            <div class="display-area">
            <div class="container-fluid student-tab bg-danger">
                <ul>
                    <li><button class="btn btn-danger" id="search-student">
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <a href="#">Search Student</a>
                    </button></li>
                    <li><button class="btn btn-danger" id="add-student">
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                        <a href="#">Add New Student</a>
                    </button></li>
                    <li><button class="btn btn-danger" id="update-profiles">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <a href="#">Update Profiles</a>
                    </button></li>
                    <li><button class="btn btn-danger" id="all-students">
                    <i class="fa fa-users" aria-hidden="true"></i> 
                        <a href="#">All Students</a>
                    </button></li>
                </ul>
            </div>
        </div>
    `
    // search form 
    const SEARCH_FORM = `
    <div class="card p-3 tab-func">
        <form action="/get_student" id="search-form" method='post'>
        <h5 class="border-bottom pb-2">
            <i class="fa fa-search-plus" aria-hidden="true"></i>
            Search By
        </h5>
        <div style="display: flex;">
            <div><input type="radio" value="Adm" name="search" id="adm" checked>
                <label for="adm" class="ml">Adm No</label>
            </div>
            <div class="mx-3"><input type="radio" id="name" value="name" name="search"> 
                <label for="name" class="ml">Name</label>
            </div>
            <div class="mx-3"><input type="radio" id="upi" value="upi" name="search">
                <label for="upi" class="ml">UPI No</label>
            </div>
        </div>
        <div class="form-group mt-2">
            <input type="number" name="search-value" class="form-control" required 
            id="search-field" placeholder="1234" autocomplete="off">
        </div>
            <div class="mt-2" style="margin-left: 88%;">
                <button type="submit" class="btn btn-danger" style="width: 100px;">
                <i class="fa fa-search" aria-hidden="true"></i>
                    Search
                </button>
        </div>
        </form>
   </div>
    `
    // student add form

    const STUDENT_ADD_F0RM = `
        <form action="/register_student" style="width: 350px;" id="student-add-form" method="post">
            <h6 class="border-bottom pb-3">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            Add New Student
        </h6>
            <div class="form-group">
                <label for="firstname" class="label">First Name:</label>
                <input type="text" name='firstname' class="form-control" id="firstname" required placeholder="John">
            </div>
                <div class="form-group">
                <label for="secondname" class="label">Second Name:</label>
                <input type="text" name='secondname' class="form-control" id="secondname" required placeholder="Doe">
            </div>
            <div class="form-group">
                <label for="adm" class="label">Adm No:</label>
                <input type="number" name='adm' class="form-control" id="adm" required placeholder="1234">
            </div>
            <div class="form-group">
                <label for="upi" class="upi">UPI No:</label>
                <input type="text" name='upi' class="form-control" id="upi" required placeholder="XD32L">
            </div>
                <div class="d-grid mt-2">
                <input type="submit" class="btn btn-danger" value="Save">
            </div>
        </form>
    `
    // insert tabs and search form into the display area 
    if ( !document.querySelector('.display-area') ) {
        displayContainer.insertAdjacentHTML('afterbegin', STUDENT_TABS);
        displayContainer.insertAdjacentHTML('beforeend', SEARCH_FORM); 

        // manipulate search input functionality to match user selected option
        var radio_btns = document.getElementsByName('search');
        var searchField = document.getElementById('search-field');

        radio_btns.forEach(e => {
            e.addEventListener('click', ()=> {
            if (e.value === 'name') {
                 // change input field type to text and placeholder
                 searchField.setAttribute('type', 'text')
                 searchField.setAttribute('placeholder', "Type student's Name")
            } else if (e.value === 'upi') {
                 // change input field type to text and placeholder
                 searchField.setAttribute('type', 'text')
                 searchField.setAttribute('placeholder', "Type student's UPI No")
            }
            else {
                 // change input field type to number and placeholder
                 searchField.setAttribute('type', 'number')
                 searchField.setAttribute('placeholder', "1234")
            }
          })
         })
    }

    // get tab links
    var searchStudent = document.getElementById('search-student');
    var addStudent = document.getElementById('add-student');
    var updateProfiles = document.getElementById('update-profiles');

    // Add student tab
    addStudent.addEventListener('click', ()=> {
        // clear the display area and add new functionality
        let tabFunc = displayContainer.lastElementChild
        let searchForm = document.getElementsByTagName('form')[0];
        tabFunc.removeChild(searchForm)

        // insert add student form
        tabFunc.insertAdjacentHTML('beforeend', STUDENT_ADD_F0RM)

    })

    // Search student tab
    searchStudent.addEventListener('click', ()=> {
        // clear the display area and add new functionality
         let searchForm = document.getElementById('search-form');
         if ( !searchForm ) {
            if ( document.querySelector('.display-area') ) {
                 let children = displayContainer.children;
                 displayContainer.removeChild(children[1])
                displayContainer.insertAdjacentHTML('beforeend', SEARCH_FORM);
            }
         }  
    })

}

// QUESTIONS MODULE // 
const QUESTIONS_LINK = document.getElementById('questions');
