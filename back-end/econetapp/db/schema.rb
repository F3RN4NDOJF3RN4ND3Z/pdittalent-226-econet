# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_10_002810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contactos", force: :cascade do |t|
    t.string "nombre"
    t.string "telefono"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "denuncia", force: :cascade do |t|
    t.string "observaciones"
    t.string "estado"
    t.bigint "humedal_id"
    t.bigint "usuario_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["humedal_id"], name: "index_denuncia_on_humedal_id"
    t.index ["usuario_id"], name: "index_denuncia_on_usuario_id"
  end

  create_table "eventos", force: :cascade do |t|
    t.text "descripcion"
    t.string "url_imagen"
    t.string "organizador"
    t.string "horario"
    t.bigint "contacto_id"
    t.bigint "humedal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contacto_id"], name: "index_eventos_on_contacto_id"
    t.index ["humedal_id"], name: "index_eventos_on_humedal_id"
  end

  create_table "fotos_humedals", force: :cascade do |t|
    t.string "url_imagen"
    t.boolean "esPrincipal"
    t.bigint "humedal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["humedal_id"], name: "index_fotos_humedals_on_humedal_id"
  end

  create_table "humedals", force: :cascade do |t|
    t.string "nombre"
    t.string "direccion"
    t.string "ubicacion"
    t.text "descripcion"
    t.string "horario_atencion"
    t.bigint "contacto_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contacto_id"], name: "index_humedals_on_contacto_id"
  end

  create_table "suscripciones_humedals", force: :cascade do |t|
    t.bigint "usuario_id"
    t.bigint "humedal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["humedal_id"], name: "index_suscripciones_humedals_on_humedal_id"
    t.index ["usuario_id"], name: "index_suscripciones_humedals_on_usuario_id"
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nombre"
    t.string "email"
    t.string "url_imagen"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "denuncia", "humedals"
  add_foreign_key "denuncia", "usuarios"
  add_foreign_key "eventos", "contactos"
  add_foreign_key "eventos", "humedals"
  add_foreign_key "fotos_humedals", "humedals"
  add_foreign_key "humedals", "contactos"
  add_foreign_key "suscripciones_humedals", "humedals"
  add_foreign_key "suscripciones_humedals", "usuarios"
end
