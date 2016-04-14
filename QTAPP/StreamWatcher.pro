#-------------------------------------------------
#
# Project created by QtCreator 2016-03-30T10:54:55
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = StreamWatcher
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    filewatcher.cpp \
    jsonifytext.cpp

HEADERS  += mainwindow.h \
    filewatcher.h \
    jsonifytext.h

FORMS    += mainwindow.ui
