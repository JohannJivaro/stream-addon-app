#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include "filewatcher.h"
#include "jsonifytext.h"
#include <QMainWindow>
#include <QListWidgetItem>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

public slots:
	void onTextFileChanged(const QString file);


private slots:
	void on_startButton_clicked();
	void on_fileExplorerButton_clicked();
	void on_addSelectedFileButton_clicked();
	void on_addFilesToWatchListButton_clicked();
	void on_stopButton_clicked();
	void on_editOutPutDirButton_clicked();

private:
	void init();

	void addFileToListView(const QString &fileName);

    Ui::MainWindow *ui;
	QString tempSelectedFile;
	QStringList tempSelectedFiles;
	QStringList watchFiles;
	FileWatcher *fileWatcher = nullptr;
	JsonifyText *fileWriter = nullptr;
	QString customOutputLocation;

};

#endif // MAINWINDOW_H
