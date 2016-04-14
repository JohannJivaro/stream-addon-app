#include "filewatcher.h"

FileWatcher::FileWatcher()
{
}

void FileWatcher::addFilesToWatchList(const QStringList &filePaths)
{
	addPaths(filePaths);
}

QStringList FileWatcher::getWatchList()
{
	return files();
}
