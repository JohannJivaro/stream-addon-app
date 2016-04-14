#include "jsonifytext.h"

JsonifyText::JsonifyText()
{
}

void JsonifyText::writeToFile(const QStringList &filePaths)
{
	qDebug("Updating output file");
	QString defaultLocation;
	if ( !m_outputDir.isEmpty() ){
		defaultLocation = m_outputDir + "/output.json";
	} else {
		defaultLocation = QDir::currentPath() + "/output.json";
	}

	QJsonObject json;
	foreach ( const QString &filePath, filePaths ) {

		QFile file(filePath);
		if ( !file.open(QIODevice::ReadOnly|QIODevice::Text)){
			qDebug(qPrintable(file.errorString()));
			continue;
		}

		QTextStream in(&file);
		in.setCodec("UTF-8");
		QString str = in.readAll();

		QFileInfo fileInfo(file.fileName());
		json.insert(fileInfo.fileName(), str);
	}

	QJsonDocument doc(json);
	QString jsonString = QString::fromUtf8(doc.toJson(QJsonDocument::Indented));

	QFile outputFile(defaultLocation);
	if ( outputFile.open(QIODevice::ReadWrite|QIODevice::Truncate)){
		QTextStream stream(&outputFile);
		stream.setCodec("UTF-8");
		stream << jsonString << endl;
		outputFile.close();
	} else {
		qDebug(qPrintable(outputFile.errorString()));
	}
}

void JsonifyText::setOutputDir(const QString &dir)
{
	m_outputDir = dir;
}
