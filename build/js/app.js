(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3'),
  fillContainer = function(html) {
    $('#dino').html(html);
  },
  error = function() {
    console.log("no dinos for you");
  };

  getDinos.then(fillContainer, error);



  $(document).ready(function(){
    $('#dinoForm').submit(function(event){
      event.preventDefault();
      var numOfParagraphs = $('#numOfParagraphs').val();
      var wordsPerParagraph = $('#wordsPerParagraph').val();
      var customDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + numOfParagraphs + '&words=' + wordsPerParagraph);
      fillContainer = function(html) {
        $('#userDino').html(html);
      },
      error = function() {
        console.log("no dinos for you");
      };
      customDinos.then(fillContainer, error);

    });
  });

},{}]},{},[1]);
