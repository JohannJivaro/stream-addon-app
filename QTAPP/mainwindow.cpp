#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QFileDialog>
#include <QSettings>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
	fileWatcher = new FileWatcher();
	fileWriter = new JsonifyText();
	QObject::connect(fileWatcher, SIGNAL(fileChanged(QString)), this, SLOT(onTextFileChanged(QString)));
	ui->startButton->setDisabled(true);
	init();
}

MainWindow::~MainWindow()
{
	delete ui;
}

void MainWindow::onTextFileChanged(const QString file)
{
	fileWriter->writeToFile(watchFiles);
}

void MainWindow::init()
{
	QSettings settings("settings.ini", QSettings::IniFormat);
	settings.beginGroup("watchFiles");
	foreach ( const QString &value , settings.allKeys() ){
		qDebug("Value %s added", qPrintable(value));
		watchFiles.append(value);
	}
	settings.endGroup();

	settings.beginGroup("outputDir");
	customOutputLocation = settings.value("OutputDir").toString();
	settings.endGroup();

	if ( !customOutputLocation.isEmpty() ) {
		ui->outputDirLabel->setText(customOutputLocation);
		fileWriter->setOutputDir(customOutputLocation);
	}

	ui->watchedFilesList->addItems(watchFiles);
	fileWatcher->addFilesToWatchList(watchFiles);
	fileWriter->writeToFile(watchFiles);
}

void MainWindow::on_startButton_clicked()
{
	fileWatcher->addFilesToWatchList(watchFiles);
	fileWriter->writeToFile(watchFiles);
	ui->startButton->setDisabled(true);
	ui->stopButton->setEnabled(true);
}

void MainWindow::on_stopButton_clicked()
{
	fileWatcher->removePaths(watchFiles);

	ui->startButton->setEnabled(true);
	ui->stopButton->setDisabled(true);
}

void MainWindow::on_fileExplorerButton_clicked()
{
	tempSelectedFile = QFileDialog::getOpenFileName(
				this,
				tr("Select text file to watch"),
				"C://",
				"Text Files (*.txt)"
				);
}

void MainWindow::on_addSelectedFileButton_clicked()
{
	if ( tempSelectedFile.isEmpty() ){
		qDebug("No file selected");
		return;
	}
	tempSelectedFiles.append(tempSelectedFile);
	addFileToListView(tempSelectedFile);
	tempSelectedFile.clear();
}

void MainWindow::on_addFilesToWatchListButton_clicked()
{
	ui->watchedFilesList->addItems(tempSelectedFiles);
	watchFiles.append(tempSelectedFiles);
	QSettings settings("settings.ini", QSettings::IniFormat);
	qDebug(qPrintable(settings.fileName()));
	settings.beginGroup("watchFiles");
	foreach (const QString &file, tempSelectedFiles){
		qDebug("Write");
		settings.setValue(file, file);
	}

	ui->tempListWidget->clear();
	tempSelectedFiles.clear();
}

void MainWindow::addFileToListView(const QString &fileName)
{
	ui->tempListWidget->addItem(fileName);
}

void MainWindow::on_editOutPutDirButton_clicked()
{
	customOutputLocation = QFileDialog::getExistingDirectory(
				this,
				tr("Select output directory"),
				"C://"
				);
	QSettings settings("settings.ini", QSettings::IniFormat);
	settings.beginGroup("outputDir");
	settings.setValue("OutputDir", customOutputLocation);

	fileWriter->setOutputDir(customOutputLocation);
	ui->outputDirLabel->setText(customOutputLocation);
}
