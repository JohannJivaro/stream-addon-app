#ifndef JSONIFYTEXT_H
#define JSONIFYTEXT_H

#include <QObject>
#include <QJsonObject>
#include <QFile>
#include <QStandardPaths>
#include <QJsonArray>
#include <QJsonDocument>
#include <QDir>
#include <QTextStream>
#include <QTextCodec>

class JsonifyText
{
public:
	explicit JsonifyText();

	void setOutputDir(const QString &dir);

private:
	QString m_outputDir;

signals:

public slots:
	void writeToFile(const QStringList &filePaths);
};

#endif // JSONIFYTEXT_H
