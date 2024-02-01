package testing;

public class Grade {
	private int mark;
	private String gradeString;
	private boolean isPassing;
	private final int PASS_THRESHOLD = 50;
	
	public Grade(int mark) {
		this.mark = mark;
		this.setGradeString(mark);
		this.setPassing(mark);
	}
	
	public void setMark(int mark) {
		this.mark = mark;
		this.setGradeString(mark);
		this.setPassing(mark);
	}

	public String getGradeString() {
		return gradeString;
	}
	
	protected String calculateGradeString(int mark) throws MarkOutOfRangeException {
		if (mark > 100 || mark < 0) {
			throw new MarkOutOfRangeException("Invalid mark, must be between 0 and 100");
		}
		
		if (mark > 84) { return "High Distinction"; }
		if (mark > 74) { return "Distinction"; }
		if (mark > 64) { return "Credit"; }
		if (mark > 49) { return "Pass"; }
		return "Fail";
	};
	
	private void setGradeString(int mark) {
		try {			
			this.gradeString = calculateGradeString(this.mark);
		} catch (MarkOutOfRangeException e) {
//			e.printStackTrace();
			this.gradeString = null;
		}
	}
	
	public boolean isPassing() {
		return isPassing;
	}
	
	private void setPassing(int mark) {
		this.isPassing = mark >= this.PASS_THRESHOLD;
	}
}
