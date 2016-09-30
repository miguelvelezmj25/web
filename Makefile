publish:
	@rsync -vr --exclude '*.md' --exclude '.git*' --exclude '.DS_Store' ./ linux.gp.cs.cmu.edu:www/
