export let Env, Txn, Dbi, Compression, Cursor, getAddress, clearKeptObjects, setGlobalBuffer,
	require, arch, fs, os, onExit, tmpdir, lmdbError, path, EventEmitter, orderedBinary, MsgpackrEncoder, WeakLRUCache, setEnvMap, getEnvMap, getByBinary, write, position, iterate;
export function setNativeFunctions(externals) {
	Env = externals.Env;
	Txn = externals.Txn;
	Dbi = externals.Dbi;
	Compression = externals.Compression;
	getAddress = externals.getAddress;
	clearKeptObjects = externals.clearKeptObjects;
	setGlobalBuffer = externals.setGlobalBuffer;
	Cursor = externals.Cursor;
	lmdbError = externals.lmdbError;
	getByBinary = externals.getByBinary;
	if (externals.tmpdir)
        tmpdir = externals.tmpdir
}
export function setExternals(externals) {
	require = externals.require;
	arch = externals.arch;
	fs = externals.fs;
	path = externals.path;
	EventEmitter = externals.EventEmitter;
	orderedBinary = externals.orderedBinary;
	MsgpackrEncoder = externals.MsgpackrEncoder;
	WeakLRUCache = externals.WeakLRUCache;
	tmpdir = externals.tmpdir;
   os = externals.os;
	onExit = externals.onExit;
}
