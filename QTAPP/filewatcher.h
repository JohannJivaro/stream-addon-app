#ifndef FILEWATCHER_H
#define FILEWATCHER_H

#include <QObject>
#include <QFileSystemWatcher>
#include <QStringList>

class FileWatcher : public QFileSystemWatcher
{
    Q_OBJECT
public:
	explicit FileWatcher();

	void addFilesToWatchList(const QStringList &filePaths);

	QStringList getWatchList();

signals:

public slots:

private:
	QFileSystemWatcher *watcher = nullptr;

};

#endif // FILEWATCHER_H
