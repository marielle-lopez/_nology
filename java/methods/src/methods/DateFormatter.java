package methods;

public class DateFormatter {
	static String formatToHours(int inputSeconds) {
		int hours = inputSeconds / 60 / 60;
		int minutes = inputSeconds / 60 % 60;
		int seconds = inputSeconds % 60 % 60;
		
		return String.format("%02dh%02dm%02ds", hours, minutes, seconds);
	};
	
	static String formatToHours(int inputSeconds, int inputMinutes) {
		
		int totalSeconds = (inputMinutes * 60) + inputSeconds;
		return formatToHours(totalSeconds);
		
		
//		int hours = (inputSeconds / 60 / 60) + (inputMinutes / 60);
//		int minutes = (inputSeconds / 60 % 60) + (inputMinutes % 60);
//		int seconds = (inputSeconds % 60 % 60);
//		
//		return String.format("%dh%dm%ds", hours, minutes, seconds);
	}
}
