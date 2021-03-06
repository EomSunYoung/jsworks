function checkMember(){
    var form = document.regForm;
    var id = form.memberid.value;
    var pwd1 = form.passwd.value;
    var pwd2 = form.passwd_confirm.value;
    var name = form.name.value;

    var regEx = /^[0-9A-Za-z]{5,10}$/;    // 한글이 들어갈 경우 에러
    
    // 아이디는 4글자에서 8글자까지 입력 가능
    if(id.length < 4 || id.length > 8){
        alert("아이디는 4자에서 8자까지 입력해 주세요.");
        form.id.select();
        return false;
    }else if(!regEx.test(pwd1)){   // 패스워드와 정규식이 일치하지 않으면
        alert("패스워드는 5자에서 10자까지(영문과 숫자 포함) 입력해 주세요.");
        form.pwd1.select();
        return false;
    }else if(pwd1 != pwd2){
        alert("비밀번호를 동일하게 입력해 주세요.");
        form.pwd2.select();
        return false;
    }else if(name == ""){
        alert("이름은 필수 입력 항목입니다.");
        form.name.focus();
        return false;
    }else{
        form.submit();
    }
}