import java.awt.*;
import javax.swing.*;
//ромб,прямоугольник,Окружность.
class Ex11 extends JFrame {
    int recx1 = 100;
    int recy1 = 150;
    int recx2 = 250;
    int recy2 = 250;
    int ovx1 = 150;
    int ovy1 = 150;
    int r = 100;
    int rombx1 = 250;
    int romby1 = 100;
    int rombx2 = 300;
    int romby2 = 150;


    Ex11(String s) {
        super(s);
        setLayout(null);
        setSize(500, 500);
        setVisible(true);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    }

    public void paint(Graphics paint) {
        Polygon rec=new Polygon();
        rec.addPoint(recx1,recy1);
        rec.addPoint(recx1,recy2);
        rec.addPoint(recx2,recy2);
        rec.addPoint(recx2,recy1);
        paint.drawPolygon(rec);
        paint.drawOval(ovx1,ovy1,r,r);
        Polygon Romb=new Polygon();
        Romb.addPoint(rombx1,romby1);
        Romb.addPoint(rombx2,romby2);
        Romb.addPoint(rombx1,2*romby1);
        Romb.addPoint((rombx2-rombx2/3),romby2);
        paint.drawPolygon(Romb);
    }


    public static void main(String[] args) {
        new Ex11("");


    }
}
