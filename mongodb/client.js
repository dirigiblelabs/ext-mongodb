/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

/** Client API for MongoDB */



exports.getClient = function() {
	var client = new Client();
	var native = org.eclipse.dirigible.api.mongodb.MongoDBFacade.getClient();
	client.native = native;
	return client;
};

exports.createBasicDBObject = function() {
	var dbObject = new DBObject();
	var native = org.eclipse.dirigible.api.mongodb.MongoDBFacade.createBasicDBObject();
	dbObject.native = native;
	return dbObject;
};

/**
 * Client object
 */
function Client() {
	
	this.getDB = function(name) {
		var db = new DB();
		var native = this.native.getDB(name);
		db.native = native;
		return db;
	};

}

/**
 * DB object
 */
function DB() {
	
	this.getCollection = function(name) {
		var dbCollection = new DBCollection();
		var native = this.native.getCollection(name);
		dbCollection.native = native;
		return dbCollection;
	};

}

/**
 * DBCollection object
 */
function DBCollection() {
	
	this.insert = function(dbObject) {
		this.native.insert(dbObject.native);
	};

	this.find = function(dbObject) {
		var dbCursor = new DBCursor();
		var native = this.native.find(dbObject.native);
		dbCursor.native = native;
		return dbCursor;
	};

}

/**
 * DBCursor object
 */
function DBCursor() {

	this.one = function() {
		var dbObject = new DBObject();
		var native = this.native.one();
		dbObject.native = native;
		return dbObject;
	};

}

/**
 * DBObject object
 */
function DBObject() {
	
	this.append = function(key, value) {
		this.native.append(key, value);
		return this;
	};

}

