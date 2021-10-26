function getGrade(score) {
    let grade;
    var arr_grade = ['A','B','C','D','E', 'F']
    // Write your code here
    return score==0 && score<=5?'F':score>5 && score <= 10?'E':score>10 && score <=15?'D':score >15 && score <= 20?'C':score >20 && score <= 25? 'B':score>25 && score <= 30?'A':'F'    
 
}

