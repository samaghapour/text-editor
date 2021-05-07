// valriables
let $ = document;
    // left side dom
const leftSide = $.getElementById('left'),
      logo = $.getElementById('logo'); // this logo belongs to sam aghapour
      logoText = $.querySelector('.logo-text'), // text of logo div
      search = $.getElementById('search'), // search through text of notes
      bookmarkList = $.getElementById('bookmarks-item'), // ul for bookmark notes
      notebookList = $.getElementById('notebook-item'), //ul for saved notes
      pageMode = $.getElementById('mood'), // checkbox for toggle page mood
      
      // right side dom
      rightSide = $.getElementById('right'),
      error= $.getElementById('error'), // error span
      mainArea = $.querySelector('.main-area'), // main page for writting page
      rightHead = $.querySelector('.heading'), // main page header
      noteName = $.getElementById('notename'), // notes name
      bookmarkStar = $.getElementById('bookmark'), // bookmark note
      saveBtn = $.getElementById('saveBtn'), // save note
      textArea = $.getElementById('text-area'), // the notes gonna written in here
      toolDiv = $.querySelector('.tools'), /// tools div
      toolBox = $.getElementById('tool'), // open the tools for edit text of notes
      toolBar = $.getElementById('toolbar') , // tools for edit
      AddnoteBtn= $.querySelectorAll('.btn-add'), // btn which adds note
      documentPage = $.getElementById('documentpage'), // first page
      documentHead = $.getElementById('document-head'),
      // tools btn(it's actually is icon but whatever...)
      inputTools = $.querySelectorAll('.toolbar-item-input'), // tools which are input
      iconTools = $.querySelectorAll('.toolbar-item'); // tools which are icon

// make iframe editable      
textArea.contentDocument.designMode="on";

//type animation in first page
function typestuff(){
    // type
    documentHead.innerHTML = '';
    let typed = new Typed(documentHead, {
        strings: ["hey, wanna add some notes ?", " notes can be very helpfull","to remember every important things",'just click bellow'],
        typeSpeed: 60
    });
}


// handlers ////////////////////////////////////////////////
// lightMode
function lightMode(){
   
        // left side
        leftSide.style.background = 'rgba(255, 255, 255, 0.462)';
        leftSide.style.color = '#333';
        logoText.style.color = '#333';
        logo.src = '../images/sam-dark.gif';
        $.querySelector('.fa-search').style.color = '#333';
        search.style.color = '#333';
        search.style.borderColor = '#333';
        bookmarkList.previousElementSibling.style.borderBottom = '1px solid #333'
        notebookList.previousElementSibling.style.borderBottom = '1px solid #333'
        leftSide.style.boxShadow = '3.5px 0 10px rgba(0,0,0,0.5)'
        
        //right side
        rightSide.style.background = 'rgb(234,236,240)';
        rightSide.style.color = '#333';
        $.querySelector('.fa-plus-circle').style.color = 'rgb(234,236,240)';
        $.querySelector('.fa-plus-circle').style.filter = 'drop-shadow(3px 3px 10px rgba(167, 165, 165, 0.714))';
        toolBox.style.background = 'rgb(204, 204, 204)';
        toolBar.style.background = 'rgb(204, 204, 204)';
        textArea.style.color = '#333';
        let itemli = $.querySelectorAll('.notebook-items');
        itemli.forEach(item => {
            item.style.color = '#333';
            item.style.background = 'rgba(209, 207, 207, 0.442)'
        })
        let itemli2 = $.querySelectorAll('.bookmark-items');
        itemli2.forEach(item => {
            item.style.color = '#333';
            item.style.background = 'rgba(209, 207, 207, 0.442)';
        })
        textarea.document.firstChild.lastChild.style.color = '#333';
        error.style.color = 'rgb(234,236,240)';
}

// dark mode
function darkMode(){
    
        leftSide.style.background = 'rgba(51, 51, 51, 0.694)';
        leftSide.style.color = 'rgb(234,236,240)';
        logoText.style.color = 'rgb(234,236,240)';
        logo.src = '../images/sam-light.gif';
        $.querySelector('.fa-search').style.color = 'rgb(234,236,240)';
        search.style.color = 'rgb(234,236,240)';
        search.style.borderColor = 'rgb(234,236,240)';
        leftSide.style.boxShadow = '3.5px 0 10px rgba(255, 255, 255, 0.462)';
        bookmarkList.previousElementSibling.style.borderBottom = '1px solid #fff';
        notebookList.previousElementSibling.style.borderBottom = '1px solid #fff';
        //right side
        rightSide.style.background = '#333';
        rightSide.style.color = 'rgb(234,236,240)';
        $.querySelector('.fa-plus-circle').style.color = '#333';
        $.querySelector('.fa-plus-circle').style.filter = 'drop-shadow(3px 3px 20px rgba(0,0,0,0.5))';
        toolBox.style.background = 'rgb(91, 90, 90)';
        toolBar.style.background = 'rgb(91, 90, 90)';
        textArea.style.color = 'rgb(234,236,240)';
        let itemli = $.querySelectorAll('.notebook-items');
        itemli.forEach(item => {
            item.style.color = 'rgb(234,236,240)';
            item.style.background = 'rgba(119, 121, 125, 0.802)';
        })
        let itemli2 = $.querySelectorAll('.bookmark-items');
        itemli2.forEach(item => {
            item.style.color = 'rgb(234,236,240)';
            item.style.background = 'rgba(119, 121, 125, 0.802)';
        })
        textarea.document.firstChild.lastChild.style.color = 'rgb(234,236,240)';
        error.style.color = '#333';
}

//get mode from local storage
function showMode(){
    if(localStorage.getItem('darkmode') === 'true'){
        darkMode();
        pageMode.checked = true;
    }
    else if(localStorage.getItem('darkmode') === 'false'){
        lightMode();
        pageMode.checked = false;
    }
    
    

}

// change the page mode when user clicks on switch btn to light or dark
function changeModeFunc(e){
    if(e.target.checked){
                    // dark is on
        darkMode();
        localStorage.setItem('darkmode',true);
    }else {
                //light is on
        lightMode();
        localStorage.setItem('darkmode',false);
        
    }
}

//  change the background image of body randomly
let backgrounds = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvw6jm3vEZCvtlcjeV9Uc4EYhWlM9i0EFng&usqp=CAU",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EZ7U1YX39R3CL1K6f9isgmW7hgFJYKMcKw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUXUgB9LZukduye5jIbPk4p_6W4zeUeLuJw&usqp=CAU',
    'https://wallpaperaccess.com/full/449811.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGJ64fOzrAnd7AuDWqrzMbBG_t1HQpJLF4A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUArHm-tpaMJHmRiZv3Emwh7uAZcvhBR0JWQ&usqp=CAU',
    'https://wallpapershome.com/images/pages/pic_h/23318.jpg',
    'https://wallpapershome.com/images/pages/pic_h/182.jpg',
    'https://wallpapershome.com/images/pages/ico_h/3952.jpg',
    'https://wallpapershome.com/images/pages/ico_h/3961.jpg',
    'https://wallpapershome.com/images/pages/ico_h/3945.jpg',
    'https://wallpapershome.com/images/pages/pic_h/239.jpg',
    'https://wallpapershome.com/images/pages/ico_h/6306.jpg',
    'https://wallpapershome.com/images/pages/ico_h/17156.jpg',
    'https://wallpapershome.com/images/pages/ico_h/5196.jpg',
    'https://wallpapershome.com/images/pages/ico_h/16597.jpg'

];
setInterval(() =>{
    
        let random = Math.floor(Math.random()* (10-1 +1) +1);
        $.body.style.background = `url(${backgrounds[random]})`;
        
        $.body.style.backgroundSize='cover';
        $.body.style.transition = 'background 2s ease'
        
},5000)

//get the page from local storage
function showWhichPage(){
    if(localStorage.getItem('documentpage') === 'true'){
        
        documentPage.style.display = 'flex';
        documentPage.style.opacity = 1;
        mainArea.style.display = 'none';
        mainArea.style.opacity = 0;
        mainArea.style.transition = 'none';
        rightHead.style.display = 'none';
        rightHead.style.opacity = 0;
        rightHead.style.transition = 'none';
        toolDiv.style.display = 'none';
        toolDiv.style.opacity = 0;
        toolDiv.style.transition = 'none';
        
    }
    else if(localStorage.getItem('documentpage') === 'false'){
        documentPage.style.display = 'none';
        mainArea.style.display = 'block';
        mainArea.style.opacity = 1;
        mainArea.style.transition = 'none';
        rightHead.style.display = 'flex';
        rightHead.style.opacity = 1;
        rightHead.style.transition = 'none';
        toolDiv.style.display = 'flex';
        toolDiv.style.opacity = 1;
        toolDiv.style.transition = 'none';
    }
    

}

// open new note document 
function openNewNoteFunc (){
    //  replace first page with main page
    documentPage.style.opacity = 0;
    setTimeout(()=> {
        documentPage.style.display = 'none';
        mainArea.style.display = 'block';
        mainArea.style.opacity = 1;
        rightHead.style.display = 'flex';
        rightHead.style.opacity = 1;
        toolDiv.style.display = 'flex';
        toolDiv.style.opacity = 1;
    },300);
    // document page is open
    localStorage.setItem('documentpage',false);

    
}

//open tool box
function openToolsFunc(){
   if(toolBar.style.width == '100%'){
    toolBox.classList.remove("rotatetoolboxforward")
    toolBox.classList.add("rotatetoolboxbackward");
    toolBar.style.width = '0%';
    
   }else{
    toolBox.classList.remove("rotatetoolboxbackward")
    toolBox.classList.add("rotatetoolboxforward");
    toolBar.style.width = '100%';
   }
    
   
}

// edit text with tools
function editTextFunc(e){
let command = e.target.dataset.name;
let withoutValue = command === "justifyCenter" || command === "justifyLeft"||command === "justifyRight" || command === "bold"||command === "copy" ||command === "cut"||command === "insertOrderedList"||command === "insertUnorderedList"||command === "subscript"||command === "superscript"||command === "redo"||command === "undo"||command === "underline";

    if(withoutValue){
        textarea.document.execCommand(command,true)
        iconTools.forEach(item => item.style.color = '#333')
        inputTools.forEach(item => item.style.border = 'none')
        e.target.style.color = 'rgb(198, 41, 80)';
        
    } 
    switch(command) {
        case 'createLink': 
        iconTools.forEach(item => item.style.color = '#333')
        inputTools.forEach(item => item.style.border = 'none')
        e.target.style.color = 'rgb(198, 41, 80)';
        let userLink = prompt('Enter your Link',null);
        textarea.document.execCommand(command,true,userLink);
        e.target.style.display = 'none';
        $.getElementById('unlink').style.display = 'inline-block';
        break;
        case 'formatBlock': 
        iconTools.forEach(item => item.style.color = '#333')
        inputTools.forEach(item => item.style.border = 'none')
        e.target.style.color = 'rgb(198, 41, 80)';
        textarea.document.execCommand(command,true,'H2');
        break;
        case 'unlink': 
        iconTools.forEach(item => item.style.color = '#333')
        inputTools.forEach(item => item.style.border = 'none')
        e.target.style.color = 'rgb(198, 41, 80)';
        textarea.document.execCommand(command,true);
        $.getElementById('unlink').style.display = 'none';
        $.getElementById('linked').style.display = 'inline-block';
        break;
        case 'insertImage': 
        iconTools.forEach(item => item.style.color = '#333')
        inputTools.forEach(item => item.style.border = 'none')
        e.target.style.color = 'rgb(198, 41, 80)';
        let imageUrl = prompt('Enter your Link',null);
        textarea.document.execCommand(command,true,imageUrl);
        break;

      }
}
// edit text with input tools
function editTextForInputsFunc(e){
    let command = e.target.dataset.name;

    switch(command) {
        case 'fontSize': 
        inputTools.forEach(item => item.style.border = 'none')
        iconTools.forEach(item => item.style.color = '#333')
        e.target.style.border = 'solid 1px rgb(198, 41, 80)';
            let fontsize = $.getElementById('fontsize').value;
            textarea.document.execCommand(command,true,fontsize);
            break;
       case 'foreColor':
        inputTools.forEach(item => item.style.border = 'none')
        iconTools.forEach(item => item.style.color = '#333')
        e.target.style.border = 'solid 1px rgb(198, 41, 80)';
           let fontcolor = $.getElementById('colorpicker').value;
           textarea.document.execCommand(command,true,fontcolor);
           break;
        
      }
}

// show notesbooks from local storage
let localdata = [];
function showTheNotes(){
    if(localStorage.getItem('localNotes') != null){
        localdata = JSON.parse(localStorage.getItem('localNotes'));
        //craete li's for aeach items in local
        localdata.forEach(item => {
             
            let li = $.createElement('li');
            li.classList.add('notebook-items');
            let fileIcon = $.createElement('i'); 
            let DeleteIcon = $.createElement('i'); 
            fileIcon.classList.add('fa');
            fileIcon.classList.add('fa-file');
            DeleteIcon.classList.add('fa');
            DeleteIcon.classList.add('fa-minus-square');
            DeleteIcon.classList.add('delete');
            fileIcon.innerHTML = item.name;
            li.appendChild(fileIcon);
            li.appendChild(DeleteIcon);
            notebookList.appendChild(li);
           
        })
    } else {
        localdata = [];
    }
        // give hover effect to li's depend on page mode
        $.querySelectorAll('.notebook-items').forEach(item =>{
            item.addEventListener('mouseover',(e) =>{
                e.target.style.background = 'rgba(202, 87, 116, 0.803)'
                $.querySelectorAll('.fa-file').forEach(item => item.style.background = 'transparent')
                $.querySelectorAll('.delete').forEach(item => item.style.background = 'transparent')
            })
            item.addEventListener('mouseleave',(e) =>{
                if(localStorage.getItem('darkmode') === 'true'){
                darkMode()
                } else if(localStorage.getItem('darkmode') === 'false'){
                    lightMode()
                } else{
                    e.target.style.background = 'transparent';
                }
            })
        })


        // open li noteooks on click //////////////////
        $.querySelectorAll('.notebook-items').forEach(item =>{
            
            item.addEventListener('click',(e) =>{
                
                if(e.target.className.includes('notebook-items') ){ 
                    // if user clicked on li itself
                    let Liname = e.target.firstChild.innerHTML;
                    noteName.innerHTML = Liname;
                    let noteContent = textarea.document.firstChild.lastChild;
                    let exactItem = localdata.filter(item => item.name === Liname)
                    noteContent.innerHTML = exactItem[0].content;
                    
                    localStorage.setItem('documentpage',false);
                    showWhichPage();
                }else if(e.target.className.includes('fa-file') ){ 
                    //if user clicked on li's name
                    let Liname = e.target.innerHTML;
                    let noteContent = textarea.document.firstChild.lastChild;
                    let exactItem = localdata.filter(item => item.name === Liname)
                    noteContent.innerHTML = exactItem[0].content;
                    
                    localStorage.setItem('documentpage',false);
                    showWhichPage();
                } else if(e.target.className.includes('delete')){
                    let noteName = e.target.previousElementSibling.innerHTML;

                    let noteContent = textarea.document.firstChild.lastChild;
                    localdataBookmark = localdataBookmark.filter(item => item.name != noteName);

                    localdata = localdata.filter(item => item.name != noteName);

                    localStorage.setItem('localBookmarks',JSON.stringify(localdataBookmark));

                    localStorage.setItem('localNotes',JSON.stringify(localdata));

                    location.reload();
                }
            })
            
        })
    
        
        
}

// show bookmarks from local storage
let localdataBookmark = [];
function showTheBookmarkNotes(){
    if(localStorage.getItem('localBookmarks') != null){
        localdataBookmark = JSON.parse(localStorage.getItem('localBookmarks'));
        //craete li's for aeach items in local
        localdataBookmark.forEach(item => {
             
            let li = $.createElement('li');
            li.classList.add('bookmark-items');
            let fileIcon = $.createElement('i'); //
            let DeleteIcon = $.createElement('i'); //
            fileIcon.classList.add('fa');
            fileIcon.classList.add('fa-file');
            DeleteIcon.classList.add('fa');
            DeleteIcon.classList.add('fa-minus-square');
            DeleteIcon.classList.add('delete');
            fileIcon.innerHTML = item.name;
            li.appendChild(fileIcon);
            li.appendChild(DeleteIcon);
            bookmarkList.appendChild(li);
           
        })
    } else {
        localdataBookmark = [];
    }

    // give hover effect to li's depend on page mode
    $.querySelectorAll('.bookmark-items').forEach(item =>{
        item.addEventListener('mouseover',(e) =>{
            e.target.style.background = 'rgba(202, 87, 116, 0.803)'
            $.querySelectorAll('.fa-file').forEach(item => item.style.background = 'transparent')
            $.querySelectorAll('.delete').forEach(item => item.style.background = 'transparent')
        })
        item.addEventListener('mouseleave',(e) =>{
            if(localStorage.getItem('darkmode') === 'true'){
                darkMode();
            } else if(localStorage.getItem('darkmode') === 'false'){
                lightMode();
            }else{
                e.target.style.background = 'transparent';
            }
        })
    })

    // open li noteooks on click //////////////////
    $.querySelectorAll('.bookmark-items').forEach(item =>{
        item.addEventListener('click',(e) =>{
            
            if(e.target.className.includes('bookmark-items') ){ 
                // if user clicked on li itself
                let Liname = e.target.firstChild.innerHTML;
                noteName.innerHTML = Liname;
                let noteContent = textarea.document.firstChild.lastChild;
                let exactItem = localdataBookmark.filter(item => item.name === Liname)
                noteContent.innerHTML = exactItem[0].content;
                
                localStorage.setItem('documentpage',false);
                showWhichPage();
            }else if(e.target.className.includes('fa-file') ){ 
                //if user clicked on li's name
                let Liname = e.target.innerHTML;
                let noteContent = textarea.document.firstChild.lastChild;
                let exactItem = localdataBookmark.filter(item => item.name === Liname)
                noteContent.innerHTML = exactItem[0].content;
                
                localStorage.setItem('documentpage',false);
                showWhichPage();

            } else if(e.target.className.includes('delete')){

                let Liname = e.target.previousElementSibling.innerHTML;

                localdataBookmark = localdataBookmark.filter(item => item.name != Liname);
                localdata = localdata.filter(item => item.name != Liname);

                localStorage.setItem('localBookmarks',JSON.stringify(localdataBookmark));
                localStorage.setItem('localNotes',JSON.stringify(localdata));
                location.reload();
            }
        })
        
    })
}

// save note in notebooks on click saveBtn
function saveNoteFunc (){
    let note = textArea.contentWindow.document.body;
    
    if(note.innerHTML === ''){
        // show error
            error.style.opacity = 1;
            setTimeout(()=>{
                error.style.opacity = 0;
            },1500)
    } else{
        // get note's name from user
        let noteName = prompt('Enter your note name please','New Note');
        // set note's info into local storage
        let notesContent = {
            name:noteName,
            content: note.innerHTML
        }
        localdata.push(notesContent);
        localStorage.setItem('localNotes',JSON.stringify(localdata));
        localStorage.setItem('documentpage',true);
        note.innerHTML = '';
        showWhichPage();
        location.reload();
    }
    
    
}

// bookmark note
function bookmarkNoteFunc(e){
    let note = textArea.contentWindow.document.body;
    
    if(note.innerHTML === ''){
        // show error
            error.style.opacity = 1;
            setTimeout(()=>{
                error.style.opacity = 0;
            },1500)
    } else{
        //  animate star
        e.target.classList.add('animateStar');
        setTimeout(() =>e.target.classList.remove('animateStar'),2000)
        setTimeout(() =>{
            // get note's name from user
        let noteName = prompt('Enter your note name please','New Note');
        // set note's info into local storage
        let notesContent = {
            name:noteName,
            content: note.innerHTML
        }
        localdataBookmark.push(notesContent);
        localStorage.setItem('localBookmarks',JSON.stringify(localdataBookmark));
        localdata.push(notesContent);
        localStorage.setItem('localNotes',JSON.stringify(localdata));
        localStorage.setItem('documentpage',true);
        note.innerHTML = '';
        
        location.reload();
        },1000) 
    }
}
// search the specific text through the note
function searchTextFunc (e){
        let re = /[A-Za-z0-9]/g;
        let text =e.target.value;
        //check if search text == re
        if(re.test(text)){
            //filter localnote's name which include searched text
           let searchedNameForNotebooks =  localdata.filter(function (item) {
               return item.name.includes(text)
            });
            // find li's name which == to searched Text
            $.querySelectorAll('.notebook-items').forEach(item => {
                 if(item.firstChild.innerHTML === searchedNameForNotebooks[0].name){
                     // Highlight the Li which is true after clear other false Li's
                    $.querySelectorAll('.notebook-items').forEach(item => {
                        if(localStorage.getItem('darkmode') === 'true'){
                            item.style.background = 'rgb(119, 121, 125, 0.804)'
                        } else if(localStorage.getItem('darkmode') === 'false'){
                            item.style.background = 'rgba(209, 207, 207, 0.443)'
                        }
                    });
                     item.style.background = 'rgba(194, 61, 94, 0.776)'
                 }
            })
            // if search input is empty then clear the highlight
        } if(text === ''){
            $.querySelectorAll('.notebook-items').forEach(item => {
                if(localStorage.getItem('darkmode') === 'true'){
                    item.style.background = 'rgb(119, 121, 125, 0.804)'
                } else if(localStorage.getItem('darkmode') === 'false'){
                    item.style.background = 'rgba(209, 207, 207, 0.443)'
                } else{
                    item.style.background = 'rgba(209, 207, 207, 0.443)'
                }
            });
        }
        
}



// add events //////////////////////////////////////////////////

//window event
window.addEventListener('load',function () {
    typestuff();
    showTheNotes();
    showTheBookmarkNotes()
    showMode();
    showWhichPage();
})

// toggle page mode on switch
pageMode.addEventListener('change',changeModeFunc)

// add notes on click
AddnoteBtn.forEach(item => {
    item.addEventListener('click',openNewNoteFunc)
});

// click event for open the toolBox
toolBox.addEventListener('click',openToolsFunc);

// click any tools to edit the text of your note
iconTools.forEach(item =>{
    item.addEventListener('click',editTextFunc);
})
inputTools.forEach(item =>{
    item.addEventListener('change',editTextForInputsFunc);
})

// save note in notebooks ul
saveBtn.addEventListener('click',saveNoteFunc)

// bookmark note
bookmarkStar.addEventListener('click',bookmarkNoteFunc);

// Search through the text of the note
search.addEventListener('keyup',searchTextFunc);