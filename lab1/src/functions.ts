function dissplayInfo(userName: string, userAge: number = 77, isStudent: boolean): void {
    console.log("String:", userName);
    console.log("Number:", userAge);
    console.log("Boolean:", isStudent);
    console.log("********");
}

dissplayInfo("Avrelia", 44, true);
dissplayInfo("Rain", undefined, false);