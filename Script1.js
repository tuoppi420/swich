function juuh() {
    var pisteet = 0;
    var ok = document.getElementById('jii1').value;
    if (ok === "") {
        document.getElementById('jooi2').innerHTML = "anna teksti";
    } else {

        for (var i = 0; i < ok.length; i++) {
            switch (ok[i]) {
                case 'a':
                case 'e':
                case 'i':
                case 'n':
                case 's':
                case 't':
                case 'A':
                case 'E':
                case 'I':
                case 'N':
                case 'S':
                case 'T':
                    pisteet++;
                    break;
                case 'o':
                case 'ä':
                case 'k':
                case 'l':
                case 'O':
                case 'Ä':
                case 'K':
                case 'L':
                    pisteet += 2;
                    break;
                case 'u':
                case 'm':
                case 'U':
                case 'M':
                    pisteet += 3;
                    break;
                case 'y':
                case 'h':
                case 'j':
                case 'p':
                case 'r':
                case 'v':
                case 'Y':
                case 'H':
                case 'J':
                case 'P':
                case 'R':
                case 'V':
                    pisteet += 4;
                    break;
                case 'ö':
                case 'd':
                case 'Ö':
                case 'D':
                    pisteet += 7;
                    break;
                case 'b':
                case 'f':
                case 'g':
                case 'B':
                case 'F':
                case 'G':
                    pisteet += 8;
                    break;
                case 'c':
                case 'C':
                    pisteet += 10;
                    break;
                default:
                    pisteet += 12;

            }

        }
    var juu = document.getElementById('jooi2').innerHTML = "annoit " + ok + " " + " pisteeis on: " + pisteet;
    }
     
}