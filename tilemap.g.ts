// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010102070706071a081d05031c1c1c0203061a06031a1a1a1a081d05051c1c0707061a061b031b1b03081d05051c1c0a0a03061b041b1b1b1b05051c1c1c1c0a0b0b030304171d1d05051d032121041e050b09040417170505031d03030421050505090905171705031d1d030404211e1e1e05051e0517031616212121210305041e1e041e0517171616042121212105041111111e031314161621212104211e051e0c10100d1215210303220301011e1e04031e10201821211622220404041f04041e1e0c041804040003220104041f1f1f04202004040e191904040404041f1f0f0f0f20201919190e04040404041f0f2020202020201919190404040404`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.doorClosedNorth,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedEast,sprites.dungeon.floorLight2,sprites.builtin.oceanSand15,sprites.builtin.coral5,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleSwitchDown,sprites.dungeon.stairWest,sprites.dungeon.stairLarge,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
