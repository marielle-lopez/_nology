package methods;
import java.lang.Math;


public class Area {
	static double findArea(double radius) {
		return Math.PI * Math.pow(radius, 2);
	}
	
	static double findArea(double length, double width) {
		return length * width;
	};
}
