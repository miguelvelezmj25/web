publish:
	cd ./build && rsync -vr --exclude '*.md' --exclude '.git*' --exclude '.DS_Store' ./ mvelezce@linux.gp.cs.cmu.edu:www/
