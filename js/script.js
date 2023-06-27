

walkx = 600;
walky = 478;

$("#btnTopo").click(Up);
$("#btnDireita").click(Right);
$("#btnBaixo").click(Down);
$("#btnEsquerda").click(Left);


    function Up() {
        walky -=20;
        $("#esquerda").animate({ top: walky + "px" }, { duration: 200 });
    }

    function Right() {
        walkx +=20;
        $("#esquerda").animate({ left: walkx + "px" }, { duration: 200 });
    }

    function Down() {
        walky +=20;
        $("#esquerda").animate({ top: walky + "px" }, { duration: 200 });
    }

    function Left() {
        walkx -=20;
        $("#esquerda").animate({ left: walkx + "px" }, { duration: 200 });
    }